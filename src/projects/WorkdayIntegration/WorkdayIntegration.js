import { useState } from "react";
import SubHeader from '../../components/SubHeader'
import styles from './WorkdayIntegration.module.css'

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
        <div className={styles.workdayContainer}>
            <SubHeader current='Workday' dark hideTitle/>
            <section>
                <div className={styles.diagramPanel}>
                    <div className={styles.header}>
                        <span className={styles.eyebrow}>
                            Integration Demo
                        </span>
                        <h2 className={styles.heading}>
                            Workday Integration Platform
                        </h2>
                        <p className={styles.subtext}>
                            <strong>Portfolio demonstration:</strong> Simulates an enterprise integration layer that processes Workday 
                                worker events and delivers transformed data to Payroll and Learning systems.
                        </p>
                    </div>
                    <div className={styles.architectureSection}>
                        <h2 className={styles.architectureHeading}>
                            Integration Architecture
                        </h2>
                        <p className={styles.architectureText}>
                            Workday worker events are normalized into a shared data model, 
                            then transformed and delivered independently to Payroll and Learning systems.
                        </p>
                        <div className={styles.architectureDiagram}>
                            <div className={styles.architectureBox}>
                                <strong>Workday</strong>
                                <span className={styles.boxSubtext}>Worker Transfer Event</span>
                            </div>
                            <div className={styles.arrow}>↓</div>
                            <div className={styles.architectureBox}>
                                <strong>Canonical Worker Model</strong>
                                <span className={styles.boxSubtext}>Normalized Data Contract</span>
                            </div>
                            <div className={styles.arrow}>↓</div>
                            <div className={styles.destinationRow}>
                                <div className={styles.destinationColumn}>
                                    <div className={styles.architectureBox}>
                                        <strong>Payroll Transform</strong>
                                        <span className={styles.boxSubtext}>
                                            Payroll Contract
                                        </span>
                                    </div>
                                    <div className={styles.arrow}>↓</div>
                                    <div className={styles.architectureBox}>
                                        <strong>Retry & Error Handling</strong>
                                            <span className={styles.boxSubtext}>
                                                Retryable vs. Non-Retryable Failures
                                            </span>
                                    </div>
                                    <div className={styles.arrow}>↓</div>
                                    <div className={styles.destinationBox}>
                                        Payroll
                                    </div>
                                </div>
                                <div className={styles.destinationColumn}>
                                    <div className={styles.architectureBox}>
                                        <strong>Learning Transform</strong>
                                        <span className={styles.boxSubtext}>
                                            Learning Contract
                                        </span>
                                    </div>
                                    <div className={styles.arrow}>↓</div>
                                        <div className={styles.architectureBox}>
                                            <strong>Retry & Error Handling</strong>
                                                <span className={styles.boxSubtext}>
                                                    Retryable vs. Non-Retryable Failures
                                                </span>
                                        </div>
                                    <div className={styles.arrow}>↓</div>
                                    <div className={styles.destinationBox}>
                                        Learning
                                    </div>
                                </div>
                            </div>
                            <div className={styles.arrow}>↓</div>
                            <div className={styles.architectureBox}>
                                <strong>Integration Log</strong>
                                <span className={styles.boxSubtext}>
                                    Delivery Results • Errors • Attempts • Latency
                                </span>
                            </div>
                            <div className={styles.arrow}>↓</div>
                            <div className={styles.architectureBox}>
                                <strong>Observability</strong>
                                <span className={styles.boxSubtext}>
                                    Logs • SLIs • Integration Health
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.summaryOverview}>
                    <div className={styles.workdayActions}>
                        <button className={styles.actionButton} onClick={runWorkdayDemo}>
                            {loading ? "Loading..." : "Run Integration Demo"}
                        </button>       
                            {error && (
                                <p className={styles.errorMessage}>
                                    {error}
                                </p>
                            )}             
                    </div>
                        {integrationSummary && (
                            <div className={styles.summaryGrid}>
                                <div className={styles.summaryCard}>
                                    <h3 className={styles.summaryTitle}>Total Deliveries</h3>
                                    <p className={styles.summaryValue}>
                                        {integrationSummary.total_deliveries}
                                    </p>
                                </div>
                                <div className={styles.summaryCard}>
                                    <h3 className={styles.summaryTitle}>Success Rate</h3>
                                    <p className={styles.summaryValue}>
                                        {integrationSummary.success_rate}%
                                    </p>
                                </div>
                                <div className={styles.summaryCard}>
                                    <h3 className={styles.summaryTitle}>Failed</h3>
                                    <p className={styles.summaryValue}>
                                        {integrationSummary.failed}
                                    </p>
                                </div>
                                <div className={styles.summaryCard}>
                                    <h3 className={styles.summaryTitle}>Retried</h3>
                                    <p className={styles.summaryValue}>
                                        {integrationSummary.retried}
                                    </p>
                                </div>
                            </div>
                        )}
                        {integrationLogs.length > 0 && (
                            <div className={styles.activitySection}>
                                <table className={styles.table}>
                                    <thead>
                                        <tr>
                                            <th className={styles.tableHeader}>Worker</th>
                                            <th className={styles.tableHeader}>Destination</th>
                                            <th className={styles.tableHeader}>Status</th>
                                            <th className={styles.tableHeader}>Attempts</th>
                                            <th className={styles.tableHeader}>Error</th>
                                            <th className={styles.tableHeader}>Latency</th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {integrationLogs.map((log, index) => (
                                            <tr key={index}>
                                                <td className={styles.tableCell}>{log.worker_id}</td>
                                                <td className={styles.tableCell}>{log.destination}</td>
                                                <td className={styles.tableCell}>
                                                    <span
                                                        className={
                                                            log.status === "success"
                                                                ? styles.statusSuccess
                                                                : styles.statusFailed
                                                        }
                                                    >
                                                        {log.status}
                                                    </span>
                                                </td>
                                                <td className={styles.tableCell}>{log.attempts}</td>
                                                <td className={styles.tableCell}>{log.error || "-"}</td>
                                                <td className={styles.tableCell}>{log.latency_ms} ms</td>
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



export default WorkdayIntegration;