import { useState } from "react";
import SubHeader from '../../components/SubHeader'

const API_BASE = process.env.REACT_APP_PYTHON_API_URL;

const LenderIntegrationAPI = () => {
  const [dealId, setDealId] = useState("");
  const [sourceDeal, setSourceDeal] = useState(null);
  const [syncResult, setSyncResult] = useState(null);
  const [lenderDeals, setLenderDeals] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchSourceDeal = async () => {
    if (!dealId) return;
    setLoading(true);
    setError("");
    setSourceDeal(null);

    try {
      const response = await fetch(`${API_BASE}/deals/${dealId}`);
      if (!response.ok) {
        throw new Error("Deal not found");
      }

      const data = await response.json();
      setSourceDeal(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const syncDeals = async () => {
    setLoading(true);
    setError("");
    setSyncResult(null);

    try {
      const response = await fetch(`${API_BASE}/sync-deals`, 
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Failed to sync deals");
      }

      const data = await response.json();
      setSyncResult(data);

    } catch (err) {
        setError(err.message);
    } finally {
        setLoading(false);
    }
  };

  const fetchLenderDeals = async () => {
    setLoading(true);
    setError("");

    try {
      const response = await fetch(`${API_BASE}/lender-deals`);
      if (!response.ok) {
        throw new Error("Failed to fetch lender deals");
      }

      const data = await response.json();
      setLenderDeals(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='project-container lender-bg'>
      <SubHeader current='Lender' dark />
      <section style={styles.wrapper}>
        <h2 style={styles.heading}>Lender Integration Tool</h2>
        <p style={styles.subtext}>
          Simulates an internal integration operations tool that enables teams to retrieve deal data from a partner API, transform it into the lender's LOS
          schema, execute synchronization workflows, and verify imported records.
        </p>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>1. GET Raw Source Deal by Deal ID (IDs 1–10)</h3>
          <div style={styles.row}>
            <input
              type="number"
              placeholder="Enter Deal ID"
              value={dealId}
              onChange={(e) => setDealId(e.target.value)}
              style={styles.input}
            />
            <button onClick={fetchSourceDeal} style={styles.button}>
              GET Deal
            </button>
          </div>

          {sourceDeal && (
            <pre style={styles.codeBlock}>
              {JSON.stringify(sourceDeal, null, 2)}
            </pre>
          )}
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>2. Run Sync Workflow</h3>
          <button onClick={syncDeals} style={styles.button}>
            Sync Deals
          </button>
          <p></p>
          {syncResult && (
            <div style={styles.resultGrid}>
              <div>
                <strong>Source Records</strong>
                <p>{syncResult.source_count}</p>
              </div>
              <div>
                <strong>Transformed</strong>
                <p>{syncResult.transformed_count}</p>
              </div>
              <div>
                <strong>Imported</strong>
                <p>{syncResult.imported}</p>
              </div>
              <div>
                <strong>Received</strong>
                <p>{syncResult.received}</p>
              </div>
            </div>
          )}
        </div>

        <div style={styles.card}>
          <h3 style={styles.cardTitle}>3. View Imported Loan Origination System Deals</h3>
          <button onClick={fetchLenderDeals} style={styles.button}>
            Load Lender Deals
          </button>

          {lenderDeals.length > 0 && (
            <pre style={styles.codeBlock}>
              {JSON.stringify(lenderDeals, null, 2)}
            </pre>
          )}
        </div>

        {loading && <p style={styles.status}>Loading...</p>}
        {error && <p style={styles.error}>{error}</p>}
      </section>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "2rem",
    borderRadius: "20px",
    background: "#111",
    color: "#fff",
    maxWidth: "1000px",
    margin: "0 auto",
  },
  heading: {
    fontSize: "2rem",
    marginBottom: "0.5rem",
  },
  subtext: {
    color: "#bbb",
    marginBottom: "2rem",
    lineHeight: 1.6,
  },
  card: {
    background: "#1a1a1a",
    border: "1px solid #2a2a2a",
    borderRadius: "16px",
    padding: "1.25rem",
    marginBottom: "1.5rem",
  },
  cardTitle: {
    marginBottom: "1rem",
    fontSize: "1.1rem",
  },
  row: {
    display: "flex",
    gap: "0.75rem",
    flexWrap: "wrap",
    marginBottom: "1rem",
  },
  input: {
    padding: "0.75rem 1rem",
    borderRadius: "10px",
    border: "1px solid #444",
    background: "#0d0d0d",
    color: "#fff",
    minWidth: "200px",
  },
  button: {
    padding: "0.75rem 1rem",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "#2563eb",
    color: "#fff",
    fontWeight: "600",
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
  status: {
    marginTop: "1rem",
    color: "#ccc",
  },
  error: {
    marginTop: "1rem",
    color: "#f87171",
  },
  resultGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
    gap: "1rem",
    marginTop: "1rem",
  },
};

export default LenderIntegrationAPI;