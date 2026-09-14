import { useState } from "react";
import SubHeader from '../../components/SubHeader'
import styles from './EmployeeMigrationTool.module.css'

const API_BASE = process.env.REACT_APP_PYTHON_EMPLOYEE;

const EmployeeMigrationTool = () => {

    const [migrationResult, setMigrationResult] = useState(null);
    const [migrationHistory, setMigrationHistory] = useState([]);
    const [mappings, setMappings] = useState({
        locations: {},
        positions: {}
    });
    const [sourceLocation, setSourceLocation] = useState("");
    const [destinationLocation, setDestinationLocation] = useState("");
    const [sourcePosition, setSourcePosition] = useState("");
    const [destinationPosition, setDestinationPosition] = useState("");
    const [reportRunId, setReportRunId] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
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

            if (!response.ok) {
                throw new Error("Employee migration failed");
            }

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

    const downloadMigrationReport = async () => {
        setError("");

        if (!reportRunId) {
            setError("Enter a migration run ID");
            return;
        }

        window.open(
            `${API_BASE}/workstream/migrations/${reportRunId}/report`
        );
    };

    const getMappings = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(
                `${API_BASE}/workstream/mappings`
            );

            if (!response.ok) {
                throw new Error("Failed to retrieve mappings");
            }

            const data = await response.json();
            setMappings(data);

        } catch (err) {
            setError(err.message);

        } finally {
            setLoading(false);
        }
    };

    const addLocationMapping = async () => {
        setLoading(true);
        setError("");
        setSuccessMessage("");

        try {
            const response = await fetch(
                `${API_BASE}/workstream/mappings/location?source_location=${encodeURIComponent(sourceLocation)}&destination_location=${encodeURIComponent(destinationLocation)}`,
                {
                    method: "POST"
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add location mapping");
            }

            const data = await response.json();

            setSuccessMessage(
                `${data.source_location} → ${data.destination_location} added successfully.`
            );

            setSourceLocation("");
            setDestinationLocation("");

            await getMappings();

        } catch (err) {
            setError(err.message);

        } finally {
            setLoading(false);
        }
    };

    const addPositionMapping = async () => {
        setLoading(true);
        setError("");
        setSuccessMessage("");

        try {
            const response = await fetch(
                `${API_BASE}/workstream/mappings/position?source_position=${encodeURIComponent(sourcePosition)}&destination_position=${encodeURIComponent(destinationPosition)}`,
                {
                    method: "POST"
                }
            );

            if (!response.ok) {
                throw new Error("Failed to add position mapping");
            }

            const data = await response.json();

            setSuccessMessage(
                `${data.source_position} → ${data.destination_position} added successfully.`
            );

            setSourcePosition("");
            setDestinationPosition("");

            await getMappings();

        } catch (err) {
            setError(err.message);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.container}>
            <section className={styles.toolSection}>
                <SubHeader current='Tool' dark hideTitle/>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>
                        Integration Demo
                    </span>
                    <h2 className={styles.heading}>
                        Client Employee Transfer Tool
                    </h2>
                    <p className={styles.subtext}>
                        Transfer active employees from Workstream to Toast with
                        pre-migration validation, duplicate protection, mapping
                        validation, persistent migration history, and reporting.
                    </p>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h3 className={styles.cardTitle}>
                                Employee Migration
                            </h3>
                            <p className={styles.cardDescription}>
                                Transfer active Workstream employees into Toast.
                            </p>
                        </div>
                        <button onClick={startMigration} className={styles.button}>
                            {loading ? "Processing..." : "Start Migration"}
                        </button>
                    </div>
                    {migrationResult && (
                        <div>
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
                    )} 
                </div>     
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h3 className={styles.cardTitle}>
                                Migration History
                            </h3>
                            <p className={styles.cardDescription}> 
                                See a history of all migration runs.
                            </p>    
                        </div>             
                        <button onClick={getMigrationHistory} className={styles.button}>
                            {loading ? "Loading..." : "View Migration History"}
                        </button>
                    </div>
                    {migrationHistory.map((run) => (
                        <div key={run.migration_run_id} className={styles.historyCard}>
                            <div className={styles.historyHeader}>
                                <div>
                                    <h4 className={styles.historyTitle}>Migration Run: #{run.migration_run_id}</h4>
                                    <span className={styles.historyDate}>{run.started_at}</span>
                                </div>
                                <span className={styles.statusBadge}>{run.status}</span>
                            </div>
                            <div className={styles.historyStats}>
                                <div className={styles.transferredStat}>
                                    <span>Transferred:</span><strong>{run.transferred}</strong>
                                </div>
                                <div className={styles.skippedStat}>
                                    <span>Skipped:</span><strong>{run.skipped}</strong>
                                </div>
                                <div className={styles.failedStat}>
                                    <span>Failed:</span><strong>{run.failed}</strong>
                                </div>
                            </div>
                            <div className={styles.employeeResults}>
                                {run.employees.map((employee) => (
                                    <div key={employee.employee_id} className={styles.employeeRow}>
                                        <div>
                                            <strong>{employee.name}</strong>
                                            <span className={styles.employeeId}>
                                                {employee.employee_id}
                                            </span> 
                                        </div>
                                        <span     
                                            className={`${styles.employeeStatus} ${styles[employee.status]}`}>
                                                {employee.status}
                                        </span>
                                        {employee.reason && (
                                            <p className={styles.employeeReason}>
                                                {employee.reason}
                                            </p>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className={styles.cardHeader}>
                        <div>
                            <h3 className={styles.cardTitle}>
                                Download Migration Report
                            </h3>
                            <p className={styles.cardDescription}> 
                                Download Migration Run by ID
                            </p>  
                        </div>
                            <input className={styles.input}
                                type="text"
                                placeholder="Migration Run ID"
                                value={reportRunId}
                                onChange={(e) => setReportRunId(e.target.value)}
                            />
                            <button onClick={downloadMigrationReport} className={styles.button}>
                                Download Report
                            </button>
                    </div>
                </div>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h3 className={styles.cardTitle}>
                                Mapping Configuration
                            </h3>
                            <p className={styles.cardDescription}> 
                                View and add mapping for location and position
                            </p>
                        </div>
                            <button onClick={getMappings}  className={styles.button}>
                                {loading ? "Loading..." : "View Mappings"}
                            </button>
                    </div>  
                    <div className={styles.mappingGrid}>
                        <div className={styles.mappingSection}>
                            <h4 className={styles.sectionTitle}>
                                Location Mappings
                            </h4>
                            {Object.entries(mappings.locations).map(
                                ([source, destination]) => (
                                    <div
                                        key={source}
                                        className={styles.mappingRow}
                                    >
                                        <span className={styles.mappingSource}>
                                            {source}
                                        </span>
                                        <span className={styles.mappingArrow}>
                                            →
                                        </span>
                                        <span className={styles.mappingDestination}>
                                            {destination}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                        <div className={styles.mappingSection}>
                            <h4 className={styles.sectionTitle}>
                                Position Mappings
                            </h4>
                            {Object.entries(mappings.positions).map(
                                ([source, destination]) => (
                                    <div
                                        key={source}
                                        className={styles.mappingRow}
                                    >
                                        <span className={styles.mappingSource}>
                                            {source}
                                        </span>
                                        <span className={styles.mappingArrow}>
                                            →
                                        </span>
                                        <span className={styles.mappingDestination}>
                                            {destination}
                                        </span>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div className={styles.cardHeader}>
                        <div>
                            <h4 className={styles.sectionTitle}>
                                Add Location Mappings
                            </h4>
                            <p className={styles.cardDescription}> 
                                Map a location to its downstream location.
                            </p>
                        </div>
                            <input className={styles.input}
                                type="text"
                                placeholder="Workstream location"
                                value={sourceLocation}
                                onChange={(e) => setSourceLocation(e.target.value)}
                            />
                            <input className={styles.input}
                                type="text"
                                placeholder="Toast location"
                                value={destinationLocation}
                                onChange={(e) => setDestinationLocation(e.target.value)}
                            />
                            <button onClick={addLocationMapping} className={styles.button}>
                                Add Location Mapping
                            </button>
                            {successMessage && (
                                <p><div className={styles.successAlert}>{successMessage}</div></p>
                            )}
                            {error && (
                                <p><div className={styles.errorAlert}>{error}</div></p>
                            )}
                    </div>
                    <div className={styles.cardHeader}>
                        <div>
                            <h4 className={styles.sectionTitle}>
                                Add Position Mappings
                            </h4>
                            <p className={styles.cardDescription}> 
                                Map a positioin to its downstream position.
                            </p>
                        </div>
                            <input className={styles.input}
                                type="text"
                                placeholder="Workstream position"
                                value={sourcePosition}
                                onChange={(e) => setSourcePosition(e.target.value)}
                            />
                            <input className={styles.input}
                                type="text"
                                placeholder="Toast position"
                                value={destinationPosition}
                                onChange={(e) => setDestinationPosition(e.target.value)}
                            />
                            <button onClick={addPositionMapping} className={styles.button}>
                                Add Position Mapping
                            </button>
                            {successMessage && (
                                <p><div className={styles.successAlert}>{successMessage}</div></p>
                            )}
                            {error && (
                                <p><div className={styles.errorAlert}>{error}</div></p>
                            )}
                    </div>  
                </div>
            </section>
        </div>
    );
};

export default EmployeeMigrationTool;