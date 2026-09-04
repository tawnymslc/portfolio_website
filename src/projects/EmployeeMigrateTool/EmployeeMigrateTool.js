import { useState } from "react";
import SubHeader from '../../components/SubHeader'

const API_BASE = process.env.REACT_APP_PYTHON_EMPLOYEE;

const EmployeeMigrateTool = () => {

    const [transferResult, setTransferResult] = useState(null);
    const [logResult, setLogResult] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const handleTransfer = async () => {
        try{
            const response = await fetch(`${API_BASE}/workstream/migrations`,
                {
                    method: "POST"
                }
            );

            const data = await response.json();
            setTransferResult(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const displayLog = async () => {
        setLoading(true);
        setError("");

        try {
            const response = await fetch(`${API_BASE}/workstream/migrations`);

            if (!response.ok) {
                throw new Error("Failed to retrieve migration log");
            }

            const data = await response.json();
            setLogResult(data);

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
                    Simulates an external employee transfer tool that enables teams to retrieve deal data from a partner API, transform it into the lender's LOS
                    schema, execute synchronization workflows, and verify imported records.
                </p>
                <div style={styles.card}>
                     <div style={styles.row}>
                        <button onClick={handleTransfer} style={styles.button}>
                        Initiate Transfer
                        </button>
                    </div>
                    {transferResult && (
                        <pre style={styles.codeBlock}>
                        {JSON.stringify(transferResult, null, 2)}
                        </pre>
                    )}

                    <div style={styles.row}>
                        <button onClick={displayLog}>
                            {loading ? "Loading..." : "View Migration Log"}
                        </button>
                        {logResult.map((record) => (
                            <div key={`${record.employee_id}-${record.migration_date}`}>
                                {record.name} - {record.status}
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

export default EmployeeMigrateTool;