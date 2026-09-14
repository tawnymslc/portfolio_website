import { useState } from "react";
import SubHeader from '../../components/SubHeader'

const API_BASE = process.env.REACT_APP_PYTHON_EMPLOYEE;

const WorkdayIntegration = () => {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [integrationSummary, setIntegrationSummary] = useState(null);
    const [integrationLogs, setIntegrationLogs] = useState([]);

    const getIntegrationData = async () => {
        try {
            const summaryResponse = await fetch(
                `${API_BASE}/workday/integrations/summary`
            );

            const logResponse = await fetch(
                `${API_BASE}/workday/integrations`
            );

            const summaryData = await summaryResponse.json();
            const logData = await logResponse.json();

            setIntegrationSummary(summaryData);
            setIntegrationLogs(logData);

        } catch (err) {
            setError(err.message);
        }
    };

    const runWorkdayDemo = async () => {
        try {
            setLoading(true);
            setError("");
            // reset + demo requests...

            await fetch(`${API_BASE}/workday/demo/reset`, {
                method: "POST",
            });

            const demoWorkers = [
                "WD-2001",
                "WD-2002",
                "WD-2003",
                "WD-2004"
            ];

            for (const workerId of demoWorkers) {
                await fetch(`${API_BASE}/workday/events/worker-transfer`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        worker_id: workerId,
                        first_name: "Demo",
                        last_name: "Employee",
                        old_department: "Sales",
                        new_department: "Engineering",
                        location: "Utah",
                        manager_id: "WD-10021"
                    })
                });
            }
            await getIntegrationData();

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='project-container'>
            <SubHeader current='Workday' dark/>
            <section>
                <div style={styles.diagramPanel}>
                    <div style={styles.architectureSection}>
                        <h2 style={styles.architectureHeading}>
                            Integration Architecture
                        </h2>
                        <p style={styles.architectureText}>
                            Worker transfer events are normalized into a canonical data
                            contract before being transformed and delivered independently
                            to downstream Payroll and Learning systems.
                        </p>
                        <div style={styles.architectureDiagram}>
                            <div style={styles.architectureBox}>
                                <strong>Workday</strong>
                                <span style={styles.boxSubtext}>Worker Transfer Event</span>
                            </div>
                            <div style={styles.arrow}>↓</div>
                            <div style={styles.architectureBox}>
                                <strong>Canonical Worker Model</strong>
                                <span style={styles.boxSubtext}>Normalized Data Contract</span>
                            </div>
                            <div style={styles.arrow}>↓</div>
                            <div style={styles.destinationRow}>
                                <div style={styles.destinationColumn}>
                                    <div style={styles.architectureBox}>
                                        <strong>Payroll Transform</strong>
                                        <span style={styles.boxSubtext}>
                                            Payroll Contract
                                        </span>
                                    </div>
                                    <div style={styles.arrow}>↓</div>
                                    <div style={styles.architectureBox}>
                                        <strong>Retry & Error Handling</strong>
                                            <span style={styles.boxSubtext}>
                                                Retryable vs. Non-Retryable Failures
                                            </span>
                                    </div>
                                    <div style={styles.arrow}>↓</div>
                                    <div style={styles.destinationBox}>
                                        Payroll
                                    </div>
                                </div>
                                <div style={styles.destinationColumn}>
                                    <div style={styles.architectureBox}>
                                        <strong>Learning Transform</strong>
                                        <span style={styles.boxSubtext}>
                                            Learning Contract
                                        </span>
                                    </div>
                                    <div style={styles.arrow}>↓</div>
                                        <div style={styles.architectureBox}>
                                            <strong>Retry & Error Handling</strong>
                                                <span style={styles.boxSubtext}>
                                                    Retryable vs. Non-Retryable Failures
                                                </span>
                                        </div>
                                    <div style={styles.arrow}>↓</div>
                                    <div style={styles.destinationBox}>
                                        Learning
                                    </div>
                                </div>
                            </div>
                            <div style={styles.arrow}>↓</div>
                            <div style={styles.architectureBox}>
                                <strong>Integration Log</strong>
                                <span style={styles.boxSubtext}>
                                    Delivery Results • Errors • Attempts • Latency
                                </span>
                            </div>
                            <div style={styles.arrow}>↓</div>
                            <div style={styles.architectureBox}>
                                <strong>Observability</strong>
                                <span style={styles.boxSubtext}>
                                    Logs • SLIs • Integration Health
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={styles.workdayActions}>
                        <button style={styles.actionButton} onClick={runWorkdayDemo}>
                            {loading ? "Loading..." : "Run Integration Demo"}
                        </button>       
                            {error && (
                                <p style={styles.errorMessage}>
                                    {error}
                                </p>
                            )}             
                    </div>
                        {integrationSummary && (
                            <div style={styles.summaryGrid}>
                                <div style={styles.summaryCard}>
                                    <h3 style={styles.summaryTitle}>Total Deliveries</h3>
                                    <p style={styles.summaryValue}>
                                        {integrationSummary.total_deliveries}
                                    </p>
                                </div>
                                <div style={styles.summaryCard}>
                                    <h3 style={styles.summaryTitle}>Success Rate</h3>
                                    <p style={styles.summaryValue}>
                                        {integrationSummary.success_rate}%
                                    </p>
                                </div>
                                <div style={styles.summaryCard}>
                                    <h3 style={styles.summaryTitle}>Failed</h3>
                                    <p style={styles.summaryValue}>
                                        {integrationSummary.failed}
                                    </p>
                                </div>
                                <div style={styles.summaryCard}>
                                    <h3 style={styles.summaryTitle}>Retried</h3>
                                    <p style={styles.summaryValue}>
                                        {integrationSummary.retried}
                                    </p>
                                </div>
                            </div>
                        )}
                        {integrationLogs.length > 0 && (
                            <div style={styles.activitySection}>
                                <table style={styles.table}>
                                    <thead>
                                        <tr>
                                            <th style={styles.tableHeader}>Worker</th>
                                            <th style={styles.tableHeader}>Destination</th>
                                            <th style={styles.tableHeader}>Status</th>
                                            <th style={styles.tableHeader}>Attempts</th>
                                            <th style={styles.tableHeader}>Error</th>
                                            <th style={styles.tableHeader}>Latency</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {integrationLogs.map((log, index) => (
                                            <tr key={index}>
                                                <td style={styles.tableCell}>{log.worker_id}</td>
                                                <td style={styles.tableCell}>{log.destination}</td>
                                                <td style={styles.tableCell}>
                                                    <span
                                                        style={
                                                            log.status === "success"
                                                                ? styles.statusSuccess
                                                                : styles.statusFailed
                                                        }
                                                    >
                                                        {log.status}
                                                    </span>
                                                </td>
                                                <td style={styles.tableCell}>{log.attempts}</td>
                                                <td style={styles.tableCell}>{log.error || "-"}</td>
                                                <td style={styles.tableCell}>{log.latency_ms} ms</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                </div>
            </section>
        </div>
    );
};

const styles = {
    heading: {
        fontSize: "2rem",
        marginBottom: "0.5rem",
    },
    subtext: {
        color: "#bbb",
        marginBottom: "2rem",
        lineHeight: 1.6,
    },
    summaryGrid: {
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: "16px",
        marginTop: "20px",
        marginBottom: "30px",
    },
    summaryCard: {
        padding: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        background: "#fff",
    },
    summaryTitle: {
        margin: "0 0 10px",
        fontSize: "16px",
        fontWeight: 600,
    },
    summaryValue: {
        margin: 0,
        fontSize: "28px",
        fontWeight: 700,
    },
    table: {
        width: "100%",
        borderCollapse: "collapse",
        marginTop: "1rem",
    },
    tableHeader: {
        textAlign: "left",
        padding: "12px",
        borderBottom: "2px solid #ddd",
        fontWeight: 600,
    },
    tableCell: {
        padding: "12px",
        borderBottom: "1px solid #eee",
        verticalAlign: "top",
    },
    activitySection: {
        marginTop: "2rem",
    },
    statusSuccess: {
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: "12px",
        background: "#e6f4ea",
        color: "#137333",
        fontWeight: 600,
    },
    statusFailed: {
        display: "inline-block",
        padding: "4px 10px",
        borderRadius: "12px",
        background: "#fce8e6",
        color: "#c5221f",
        fontWeight: 600,
    },
    diagramPanel: {
        background: "#111315",
        borderRadius: "16px",
        padding: "40px 30px",
        marginTop: "2rem",
        border: "1px solid #2a2d30",
    },
    architectureSection: {
        marginTop: "2.5rem",
        marginBottom: "3rem",
    },
    architectureHeading: {
        fontSize: "1.5rem",
        marginBottom: "0.5rem",
        color: "#f5f5f5",
    },
    architectureText: {
        color: "#bbb",
        lineHeight: 1.6,
        marginBottom: "2rem",
    },
    architectureDiagram: {
        maxWidth: "850px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    architectureBox: {
        width: "260px",
        padding: "16px",
        border: "1px solid #555",
        borderRadius: "10px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        background: "#1b1e21",
        color: "#f5f5f5",
    },
    destinationBox: {
        width: "260px",
        padding: "14px",
        border: "1px solid #777",
        borderRadius: "10px",
        textAlign: "center",
        fontWeight: 600,
        background: "#1b1e21",
        color: "#f5f5f5",
    },
    boxSubtext: {
        fontSize: "0.8rem",
        color: "#aaa",
    },
    arrow: {
        fontSize: "1.5rem",
        padding: "6px 0",
        color: "#aaa",
    },
    destinationRow: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        gap: "80px",
    },
    destinationColumn: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    actionButton: {
        background: "#0875E1",
        color: "#ffffff",
        border: "1px solid #555",
        borderRadius: "8px",
        padding: "10px 18px",
        fontSize: "0.95rem",
        fontWeight: 600,
        cursor: "pointer",
        marginRight: "10px",
        marginBottom: "10px",
    },
    workdayActions: {
        display: "flex",
        justifyContent: "center",
        gap: "12px",
        marginTop: "24px",
        marginBottom: "32px",
    },
    errorMessage: {
        marginTop: "12px",
        color: "#c5221f",
        fontWeight: 600,
    },
};

export default WorkdayIntegration;