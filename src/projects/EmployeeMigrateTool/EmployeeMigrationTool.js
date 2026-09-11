import { useState } from "react";
import SubHeader from '../../components/SubHeader'

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
                throw new Error("Failed to transfer/process");
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
        setLoading(true);
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
                `${data.source_location} → ${data.destination_location} added successfully.`
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
                            {loading ? "Processing..." : "Initiate Migration"}
                        </button>
                    
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
                    </div>
                    <div style={styles.row}>
                        <button onClick={getMigrationHistory}>
                            {loading ? "Loading..." : "View Migration History"}
                        </button>
                        {migrationHistory.map((run) => (
                            <div key={run.migration_run_id} style={styles.codeBlock}>
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
                    <div style={styles.row}>
                        <div>
                            <h3>Download Migration Report</h3>
                                <input
                                    type="text"
                                    placeholder="Migration Run ID"
                                    value={reportRunId}
                                    onChange={(e) => setReportRunId(e.target.value)}
                                />
                            <button onClick={downloadMigrationReport}>
                                Download Report
                            </button>
                        </div>
                    </div>
                    <div style={styles.row}>
                        <div style={styles.codeBlock}>
                            <button onClick={getMappings}>
                                View Mappings
                            </button>
                            <h3>Location Mappings</h3>
                            {Object.entries(mappings.locations).map(
                                ([source, destination]) => (
                                    <div key={source}>
                                        {source} → {destination}
                                    </div>
                                )
                            )}
                            <h3>Position Mappings</h3>
                            {Object.entries(mappings.positions).map(
                                ([source, destination]) => (
                                    <div key={source}>
                                        {source} → {destination}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                    <div style={styles.row}>
                        <div>
                            <h3>Add Location Mapping</h3>
                            <input
                                type="text"
                                placeholder="Workstream location"
                                value={sourceLocation}
                                onChange={(e) => setSourceLocation(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Toast location"
                                value={destinationLocation}
                                onChange={(e) => setDestinationLocation(e.target.value)}
                            />
                            <button onClick={addLocationMapping}>
                                Add Location Mapping
                            </button>
                            {successMessage && (
                                <p>{successMessage}</p>
                            )}
                            {error && (
                                <p>{error}</p>
                            )}
                        </div>
                    </div>
                    <div style={styles.row}>
                        <div>
                            <h3>Add Position Mapping</h3>
                            <input
                                type="text"
                                placeholder="Workstream position"
                                value={sourcePosition}
                                onChange={(e) => setSourcePosition(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Toast position"
                                value={destinationPosition}
                                onChange={(e) => setDestinationPosition(e.target.value)}
                            />
                            <button onClick={addPositionMapping}>
                                Add Position Mapping
                            </button>
                            {successMessage && (
                                <p>{successMessage}</p>
                            )}
                            {error && (
                                <p>{error}</p>
                            )}
                        </div>
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