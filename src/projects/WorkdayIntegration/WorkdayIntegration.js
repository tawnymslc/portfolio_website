import { useState } from "react";
import SubHeader from '../../components/SubHeader'
import styles from './WorkdayIntegration.module.css'

const API_BASE = process.env.REACT_APP_PYTHON_EMPLOYEE;

const WorkdayIntegration = () => {

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [workerTransfer, setWorkersTransfer] = useState([]);
    const [selectedWorkerId, setSelectedWorkerId] = useState("");
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

        setLoading(true);
        setError("");

        try {
            // reset + demo requests...
            await fetch(`${API_BASE}/workday/demo/reset`, {
                method: "POST",
            });

            const response = await fetch(`${API_BASE}/workday/demo/run`,
                {
                    method: "POST"
                }
            );

            if (!response.ok) {
                throw new Error("Worker transfer failed");
            }

            const data = await response.json();
            setWorkersTransfer(data);

            await getIntegrationData();

        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    };

    const selectedWorker = workerTransfer.find(

        (run) => run.worker.worker_id === selectedWorkerId

    );

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
                                    <div className={styles.destinationBox}>
                                        <strong>Payroll Transform</strong>
                                        <span className={styles.boxSubtext}>
                                            Payroll Contract
                                        </span>
                                    </div>
                                    <div className={styles.arrow}>↓</div>
                                    <div className={styles.destinationBox}>
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
                                    <div className={styles.destinationBox}>
                                        <strong>Learning Transform</strong>
                                        <span className={styles.boxSubtext}>
                                            Learning Contract
                                        </span>
                                    </div>
                                    <div className={styles.arrow}>↓</div>
                                        <div className={styles.destinationBox}>
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
                        <div>
                            <h4 className={styles.whyArchitectureHeading}>Why this architecture?</h4>
                            <div className={styles.architectureDecision}>
                                <span className={styles.decisionNumber}>01</span>
                                <div>
                                    <h4>Normalize once, transform per destination</h4>
                                    <p>
                                    Workday events are converted into a canonical worker model so
                                    downstream systems aren't coupled directly to the source format.
                                    </p>
                                </div>
                                <span className={styles.decisionNumber}>02</span>
                                <div>
                                    <h4>Isolate downstream failures</h4>
                                    <p>
                                    Payroll and Learning are processed independently. A failure in one 
                                    destination doesn’t change the data contract for the other.
                                    </p>
                                </div>
                                <span className={styles.decisionNumber}>03</span>
                                <div>
                                    <h4>Design for operational visibility</h4>
                                    <p>
                                        Every delivery records status, attempts, errors, and latency so 
                                        integration health can be monitored and failures investigated.
                                    </p>
                            </div>
                        </div>
                        </div>
                        <div className={styles.sourceHeader}>
                            <h2 className={styles.demoHeading}>Demo Workers</h2>
                        </div>
                        <p className={styles.architectureText}>
                            These Workday worker transfer events are processed through the integration platform.
                            The demo includes controlled <strong>API failures</strong> to validate retry behavior, 
                            non-retryable errors, and integration logging in addition to successful deliveries.
                        </p>
                         <div className={styles.previewHeader}>
                            <span>Worker</span>
                            <span className={styles.engDesktop}>Old Department</span>
                            <span className={styles.engMobile}>Old Dept</span>
                            <span className={styles.engDesktop}>New Department</span>
                            <span className={styles.engMobile}>New Dept</span>
                            <span>Scenario</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Maya Chen</strong>
                                <span> WD-2001</span>
                            </div>
                            <span>Sales</span>
                            <span className={styles.engDesktop}>Engineering</span>
                            <span className={styles.engMobile}>ENG</span>
                            <span>Standard</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Ethan Brooks</strong>
                                <span> WD-2002</span>
                            </div>
                            <span className={styles.engDesktop}>Engineering</span>
                            <span className={styles.engMobile}>ENG</span>
                            <span>Sales</span>
                            <span>Standard</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Sofia Ramirez</strong>
                                <span> WD-2003</span>
                            </div>
                            <span>Sales</span>
                            <span className={styles.engDesktop}>Marketing</span>
                            <span className={styles.engMobile}>MRKT</span>
                            <span>Standard</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Noah Williams</strong>
                                <span> WD-2004</span>
                            </div>
                            <span className={styles.engDesktop}>Marketing</span>
                            <span className={styles.engMobile}>MRKT</span>
                            <span className={styles.engDesktop}>Engineering</span>
                            <span className={styles.engMobile}>ENG</span>
                            <span>Standard</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Retry Success</strong>
                                <span> WD-2005</span>
                            </div>
                            <span className={styles.engDesktop}>Account Executive</span>
                            <span className={styles.engMobile}>AE</span>
                            <span className={styles.engDesktop}>Team Lead AE Team</span>
                            <span className={styles.engMobile}>TL AE</span>
                            <span>Retry → Success</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Test Fail 400</strong>
                                <span> WD-2006</span>
                            </div>
                            <span className={styles.engDesktop}>Engineering</span>
                            <span className={styles.engMobile}>ENG</span>
                            <span className={styles.engDesktop}>Sales Engineering</span>
                            <span className={styles.engMobile}>Sales ENG</span>
                            <span>503 Service Unavailable</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Test Fail 500</strong>
                                <span> WD-2007</span>
                            </div>
                            <span>Product</span>
                            <span className={styles.engDesktop}>Engineering</span>
                            <span className={styles.engMobile}>ENG</span>
                            <span>400 Bad Request</span>
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
                    {workerTransfer.length > 0 && (
                        <div>
                            <div>
                                <select
                                    className={styles.workerSelect}
                                    value={selectedWorkerId}
                                    onChange={(e) => setSelectedWorkerId(e.target.value)}
                                >
                                    <option value="">Select a worker</option>
                                    {workerTransfer.map((run) => (
                                        <option
                                            key={run.worker.worker_id}
                                            value={run.worker.worker_id}
                                        >
                                            {run.worker.full_name} ({run.worker.worker_id})
                                        </option>
                                    ))}
                                </select>
                                <h2 className={styles.transferHeading}>Transformation Details</h2>
                                {selectedWorker && (
                                    <div className={styles.architectureDiagram}>
                                        <div className={styles.destinationRow}>
                                            <div className={styles.destinationColumn}>
                                                <div className={styles.transferBoxMain}>
                                                    <strong><p>{selectedWorker.event.first_name} {selectedWorker.event.last_name}</p></strong>
                                                    <p className={styles.boxSubtext}>
                                                        {selectedWorker.event.old_department}
                                                        {" → "}
                                                        {selectedWorker.event.new_department}
                                                    </p>
                                                </div>
                                                <div className={styles.arrow}>↓</div>
                                                <div className={styles.destinationRow}>
                                                    <div className={styles.destinationColumn}>
                                                        <div className={styles.transferBox}>
                                                            <strong>Payroll User</strong>
                                                            <span className={styles.boxSubtext}>
                                                                Payroll Dept Code Created:{" "}
                                                                <strong>{selectedWorker.payroll.department_code}</strong>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.destinationColumn}>
                                                        <div className={styles.transferBox}>
                                                            <strong>Learning User</strong>
                                                            <span className={styles.boxSubtext}>
                                                                Learning Role Created:{" "}
                                                                <strong>{selectedWorker.learning.learning_role}</strong>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className={styles.transformHeader}>
                                <span>Worker</span>
                                <span className={styles.desktopLabel}>New Department</span>
                                <span className={styles.mobileLabel}>New Dept</span>
                                <span className={styles.desktopLabel}>New Payroll Dept</span>
                                <span className={styles.mobileLabel}>Payroll Dept</span>
                                <span className={styles.desktopLabel}>Role Created for Learning</span>
                                <span className={styles.mobileLabel}>Learning Role</span>
                            </div>
                            {workerTransfer.map((run) => (
                                <div className={styles.transformRow}>
                                        <strong>{run.worker.full_name}</strong>
                                        <span> {run.worker.department}</span>
                                        <span> {run.payroll.department_code}</span>
                                        <span> {run.learning.learning_role}</span>
                                </div>
                            ))}
                        </div>
                    )}
                    <div>
                        {integrationSummary && (
                            <div>
                                <h2 className={styles.transferHeading}>Delivery Summary</h2>
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
                            </div>
                        )}
                    </div>
                    <div>
                        {integrationLogs.length > 0 && (
                            <div>
                                <h2 className={styles.activityDemoHeading}>Integration Activity</h2>
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
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
};



export default WorkdayIntegration;