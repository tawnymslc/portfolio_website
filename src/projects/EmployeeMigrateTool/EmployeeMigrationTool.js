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
    const [expandedRunId, setExpandedRunId] = useState(null);
    const [successMessage, setSuccessMessage] = useState("");
    const [error, setError] = useState("");
    const [loadingAction, setLoadingAction] = useState(null);

    const startMigration = async () => {
        setLoadingAction("migration");
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
            setLoadingAction(null);
        }
    };

    const getMigrationHistory = async () => {
        setLoadingAction("history");
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
            setLoadingAction(null);
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

    const getMappings = async (showLoading = true) => {
        if (showLoading) {
            setLoadingAction("mappings");

        }
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
            setLoadingAction(null);
        }
    };

    const addLocationMapping = async () => {
        setLoadingAction("location");
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

            await getMappings(false);

        } catch (err) {
            setError(err.message);

        } finally {
            setLoadingAction(null);
        }
    };

    const addPositionMapping = async () => {
        setLoadingAction("position");
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

            await getMappings(false);

        } catch (err) {
            setError(err.message);

        } finally {
            setLoadingAction(null);
        }
    };

    return (
        <div className={styles.container}>
            <SubHeader current='Tool' dark hideTitle/>
            <div className={styles.overviewCard}>
                <div className={styles.header}>
                    <span className={styles.eyebrow}>
                        Integration Demo
                    </span>
                    <h2 className={styles.heading}>
                        Client Employee Transfer Tool
                    </h2>
                    <p className={styles.subtext}>
                        Transfer active employees from Workstream to Toast with validation,
                        duplicate protection, mapping configuration, persistent migration history,
                        and reporting.
                    </p>
                </div>
                <div className={styles.overviewHeader}>
                    <div>
                        <h3>Migration Overview</h3>
                        <p>
                            This demo simulates an employee migration from Workstream to Toast using predefined employee records and customer-configured mappings.
                        </p>
                    </div>
                    <span className={styles.demoBadge}>
                        Demo Data
                    </span>
                </div>
                <div className={styles.requirementsSection}>
                    <h4>Business Requirements</h4>
                    <div className={styles.requirementsGrid}>
                        <div>
                            <strong>Validate Employee Data</strong>
                            <p>
                                Transfer active employees with all required data while excluding
                                inactive or invalid records.
                            </p>
                        </div>
                        <div>
                            <strong>Map Workstream to Toast</strong>
                            <p>
                                Translate Workstream locations and positions to
                                customer-approved Toast values.
                            </p>
                        </div>
                        <div>
                            <strong>Protect & Track</strong>
                            <p>
                                Prevent duplicate employees and record transferred,
                                skipped, and failed results for reporting.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.sourceHeader}>
                    <h4>Source Employees</h4>
                    <span>Workstream</span>
                </div>
                <div className={styles.employeePreview}>
                    <div className={styles.previewHeader}>
                        <span>Name / Employee ID</span>
                        <span>Source Location</span>
                        <span>Source Position</span>
                        <span>Status</span>
                    </div>
                    <div className={styles.previewRow}>
                        <div>
                            <strong>Sofia Ramirez</strong>
                            <span>WS-2001</span>
                        </div>
                        <span>Downtown SLC</span>
                        <span>Manager</span>
                        <span className={styles.activeStatus}>ACTIVE</span>
                    </div>
                    <div className={styles.previewRow}>
                        <div>
                            <strong>Ethan Brooks</strong>
                            <span>WS-2002</span>
                        </div>
                        <span>Airport</span>
                        <span>Cook</span>
                        <span className={styles.activeStatus}>ACTIVE</span>
                    </div>
                    <div className={styles.previewRow}>
                        <div>
                            <strong>Maya Chen</strong>
                            <span>WS-2003</span>
                        </div>
                        <span>Midvale</span>
                        <span>Bartender</span>
                        <span className={styles.activeStatus}>ACTIVE</span>
                    </div>
                    <div className={styles.previewRow}>
                        <div>
                            <strong>Noah Williams</strong>
                            <span>WS-2004</span>
                        </div>
                        <span>Sugarhouse</span>
                        <span>Server</span>
                        <span className={styles.activeStatus}>ACTIVE</span>
                    </div>
                    <div className={styles.previewRow}>
                        <div>
                            <strong>Isabella Torres</strong>
                            <span>WS-2005</span>
                        </div>
                        <span>Downtown SLC</span>
                        <span>Server</span>
                        <span className={styles.activeStatus}>ACTIVE</span>
                    </div>
                    <div className={styles.previewRow}>
                        <div>
                            <strong>Liam Foster</strong>
                            <span>WS-2006</span>
                        </div>
                        <span>Sugarhouse</span>
                        <span>Cook</span>
                        <span className={styles.activeStatus}>ACTIVE</span>
                    </div>
                    <div className={styles.previewRow}>
                        <div>
                            <strong>Zoe Anderson</strong>
                            <span>WS-2007</span>
                        </div>
                        <span>Downtown SLC</span>
                        <span>Shift Lead</span>
                        <span className={styles.activeStatus}>ACTIVE</span>
                    </div>
                    <div className={styles.previewRow}>
                        <div>
                            <strong>Lucas Bennett</strong>
                            <span>WS-2008</span>
                        </div>
                        <span>Midvale</span>
                        <span>Server</span>
                        <span className={styles.inactiveStatus}>INACTIVE</span>
                    </div>
                    <div className={styles.previewRow}>
                        <div>
                            <strong>Amelia Davis</strong>
                            <span>WS-2009</span>
                        </div>
                        <span>West Valley</span>
                        <span>Server</span>
                        <span className={styles.activeStatus}>ACTIVE</span>
                    </div>
                </div>
                <div className={styles.futureNote}>
                    <strong>Future iteration:</strong>
                    {" "}Upload employee data by CSV instead of using predefined demo records.
                </div>
            </div>
            <section className={styles.toolSection}>
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
                        <button 
                            onClick={startMigration} 
                            className={styles.button} 
                            disabled={loadingAction === "migration"}
                        >
                            {loadingAction === "migration" ? "Processing..." : "Start Migration"}
                        </button>
                    </div>
                    {migrationResult && (
                        <div className={styles.migrationResultCard}>
                            <div className={styles.resultHeader}>
                                <div>
                                    <h3 className={styles.resultTitle}>
                                        Migration Run #{migrationResult.migration_run_id}
                                    </h3>
                                    <span className={styles.justCreatedBadge}>
                                        Just Created
                                    </span>
                                </div>
                                    <span className={styles.completedBadge}>
                                        Completed
                                    </span>
                            </div>
                            <div className={styles.historyStats}>
                                    <div className={styles.transferredStat}>
                                        <span>Transferred</span>
                                        <strong>{migrationResult.summary.transferred}</strong>
                                    </div>
                                    <div className={styles.skippedStat}>
                                        <span>Skipped</span>
                                        <strong>{migrationResult.summary.skipped}</strong>
                                    </div>
                                    <div  className={styles.failedStat}>
                                        <span>Failed</span>
                                        <strong>{migrationResult.summary.failed}</strong>
                                    </div>
                            </div> 
                            <div className={styles.employeeResults}>
                                {migrationResult.employees.map((employee) => (
                                    <div 
                                        key={employee.employee_id}
                                        className={styles.employeeRow}
                                    >
                                        <div className={styles.employeeMain}>
                                            <div>
                                                <strong>{employee.name}</strong>
                                                     <span className={styles.employeeId}>
                                                        &nbsp;{employee.employee_id}
                                                    </span>
                                            </div>
                                            <span
                                                className={`${styles.employeeStatus} ${
                                                    styles[employee.status]
                                                }`}
                                            > 
                                                {employee.status}
                                            </span>
                                        </div>
                                        {employee.reason && (
                                            <p className={styles.employeeReason}>{employee.reason}</p>
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
                        <button 
                            onClick={getMigrationHistory} 
                            className={styles.button}
                            disabled={loadingAction === "history"}
                        >
                            {loadingAction === "history" ? "Loading..." : "View Migration History"}
                        </button>
                    </div>
                    {migrationHistory.map((run) => {
                    
                        const isExpanded = expandedRunId === run.migration_run_id;

                        const isCurrentRun =
                            run.migration_run_id === migrationResult?.migration_run_id;
                    
                        return (
                            <div key={run.migration_run_id} 
                                    onClick={() =>
                                    setExpandedRunId(
                                        isExpanded
                                            ? null
                                            : run.migration_run_id
                                        )
                                    }
                                className={styles.historyCard}
                            >
                                <div className={styles.historyHeader} >
                                    <div>
                                        <h4 className={styles.historyTitle}>Migration Run: #{run.migration_run_id}</h4>
                                        <span className={styles.historyDate}>{run.started_at}&nbsp;</span>
                                        {isCurrentRun && (
                                            <span span className={styles.justCreatedBadge}>
                                                Just Created
                                            </span>
                                        )}
                                    </div>
                                    <span className={styles.statusBadge}>{run.status}</span>
                                    <span>
                                        {isExpanded ? "▲" : "▼"}
                                    </span>        
                                </div>
                                {isExpanded && (
                                    <div>
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
                                )}
                            </div>
                        )
                    })}
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
                            <button 
                                onClick={getMappings} 
                                className={styles.button}
                                disabled={loadingAction === "mappings"}
                            >
                                {loadingAction === "mappings" ? "Loading..." : "View Mappings"}
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
                            <button 
                                onClick={addLocationMapping} 
                                className={styles.button}
                                disabled={loadingAction === "location"}
                            >
                                {loadingAction === "location"? "Adding...": "Add Mapping"}                            
                            </button>
                    </div>
                    <div className={styles.cardHeader}>
                        <div>
                            <h4 className={styles.sectionTitle}>
                                Add Position Mappings
                            </h4>
                            <p className={styles.cardDescription}> 
                                Map a position to its downstream position.
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
                            <button 
                                onClick={addPositionMapping} 
                                className={styles.button}
                                disabled={loadingAction === "position"}
                            >
                                {loadingAction === "position"? "Adding...": "Add Mapping"}
                            </button>
                    </div>  
                            {successMessage && (
                                <p className={styles.successAlert}>{successMessage}</p>
                            )}
                            {error && (
                                <p className={styles.errorAlert}>{error}</p>
                            )}
                </div>
            </section>
        </div>
    );
};

export default EmployeeMigrationTool;