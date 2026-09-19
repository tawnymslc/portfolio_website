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
                        <div className={styles.sourceHeader}>
                            <h2 className={styles.activityDemoHeading}>Demo Workers</h2>
                        </div>
                        <p className={styles.architectureText}>
                            These Workday worker transfer events are processed through the integration platform.
                        </p>
                         <div className={styles.previewHeader}>
                            <span>Worker</span>
                            <span>Old Department</span>
                            <span>New Department</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Maya Chen</strong>
                                <span> WD-2001</span>
                            </div>
                            <span>Sales</span>
                            <span>Engineering</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Ethan Brooks</strong>
                                <span> WD-2002</span>
                            </div>
                            <span>Engineering</span>
                            <span>Sales</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Sofia Ramirez</strong>
                                <span> WD-2003</span>
                            </div>
                            <span>Sales</span>
                            <span>Marketing</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Noah Williams</strong>
                                <span> WD-2004</span>
                            </div>
                            <span>Marketing</span>
                            <span>Engineering</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Retry Success</strong>
                                <span> WD-2005</span>
                            </div>
                            <span>Account Executive</span>
                            <span>Team Lead AE Team</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Test Fail 400</strong>
                                <span> WD-2006</span>
                            </div>
                            <span>Engineering</span>
                            <span>Sales Engineering</span>
                        </div>
                        <div className={styles.previewRow}>
                            <div>
                                <strong>Test Fail 500</strong>
                                <span> WD-2007</span>
                            </div>
                            <span>Product</span>
                            <span>Engineering</span>
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
                                    <div>
                                        <div className={styles.destinationRow}>
                                            <div className={styles.destinationColumn}>
                                                <div className={styles.architectureBox}>
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
                                                        <div className={styles.architectureBox}>
                                                            <strong>Payroll User</strong>
                                                            <span className={styles.boxSubtext}>
                                                                Payroll Deptartment Code Created:{" "}
                                                                <strong>{selectedWorker.payroll.department_code}</strong>
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className={styles.destinationColumn}>
                                                        <div className={styles.architectureBox}>
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
                                <div className={styles.previewHeader}>
                                <span>Worker</span>
                                <span>New Department</span>
                                <span>New Payroll Dept</span>
                                <span>Role Created for Learning</span>
                            </div>
                            {workerTransfer.map((run) => (
                                <div className={styles.previewRow}>
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