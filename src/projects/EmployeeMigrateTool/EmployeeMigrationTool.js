import { useState } from "react";
import SubHeader from '../../components/SubHeader'

const API_BASE = process.env.REACT_APP_PYTHON_EMPLOYEE;

const EmployeeMigrationTool = () => {

    const [migrationResult, setMigrationResult] = useState(null);
    const [migrationHistory, setMigrationHistory] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const startMigration = async () => {
        setLoading(true);
        setError("");

        try{
            const response = await fetch(`${API_BASE}/workstream/migrations`,
                {
                    method: "POST"
                }
            );

            const data = await response.json();
            setMigrationResult(data);

        } catch (err) {
            setError(err.message);

        } finally {
            setLoading(false);
        }
    };

    const getMigrationHistory = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${API_BASE}/workstream/migrations`);

            if (!response.ok) {
                throw new Error("Failed to retrieve migration history");
            }

            const data = await response.json();
            setMigrationHistory(data);

        } catch (err) {
            setError(err.message);

        } finally {
            setLoading(false);
        }
    }

    return (
        <div className='project-container transfer-bg'>
            <SubHeader current='Tool' dark />
            <section>
                <h2 style={styles.heading}>Client Employee Transfer Tool</h2>
                <p style={styles.subtext}>
                    Transfer active employees from Workstream to Toast with
                    pre-migration validation, duplicate protection, mapping
                    validation, persistent migration history, and reporting.
                </p>
                <div style={styles.card}>
                     <div style={styles.row}>
                        <button onClick={startMigration} style={styles.button}>
                        Initiate Migration
                        </button>
                    </div>

                            {migrationResult && (
                                <div style={styles.codeBlock}>
                                    <h3>Migration Run #{migrationResult.migration_run_id}</h3>
                                    <div>
                                        <div>
                                            Transferred
                                            <strong>{migrationResult.summary.transferred}</strong>
                                        </div>
                                        <div>
                                            Skipped
                                            <strong>{migrationResult.summary.skipped}</strong>
                                        </div>
                                        <div>
                                            Failed
                                            <strong>{migrationResult.summary.failed}</strong>
                                        </div>
                                        <div>
                                            Employees
                                            {migrationResult.employees.map((employee) => (
                                                <div key={employee.employee_id}>
                                                    <strong>{employee.name}</strong>
                                                    <span> - {employee.status}</span>
                                                    {employee.reason && (
                                                        <p>{employee.reason}</p>
                                                    )}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                    <div style={styles.row}>
                        <button onClick={getMigrationHistory}>
                            {loading ? "Loading..." : "View Migration History"}
                        </button>
                        {migrationHistory.map((run) => (
                            <div key={run.migration_run_id}>
                                <p>Run: {run.migration_run_id}</p>
                                <p>Started: {run.started_at}</p>
                                <p>Status: {run.status}</p>
                                <p>Transferred: {run.transferred}</p>
                                <p>Skipped: {run.skipped}</p>
                                <p>Failed: {run.failed}</p>
                                {run.employees.map((employee) => (
                                    <div key={employee.employee_id}>
                                        {employee.name} - {employee.status}

                                        {employee.reason && (
                                            <p>{employee.reason}</p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
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
    codeBlock: {
        background: "#0b0b0b",
        padding: "1rem",
        borderRadius: "12px",
        overflowX: "auto",
        fontSize: "0.85rem",
        lineHeight: 1.5,
        color: "#9ae6b4",
    },
};

export default EmployeeMigrationTool;