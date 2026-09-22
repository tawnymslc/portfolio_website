import { useState } from "react";
import SubHeader from '../../components/SubHeader'
import styles from './LenderIntegration.module.css'

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
    <div className={styles.lenderContainer}>
      <SubHeader current='Lender' dark />
      <section className={styles.lenderWrapper}>
        <h2 className={styles.heading}>Lender Integration Tool</h2>
        <p className={styles.subtext}>
          Simulates an internal integration operations tool that enables teams to retrieve deal data from a partner API, transform it into the lender's LOS
          schema, execute synchronization workflows, and verify imported records.
        </p>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>1. GET Raw Source Deal by Deal ID (IDs 1–10)</h3>
          <div className={styles.row}>
            <input
              type="number"
              placeholder="Enter Deal ID"
              value={dealId}
              onChange={(e) => setDealId(e.target.value)}
              className={styles.input}
            />
            <button onClick={fetchSourceDeal} className={styles.button}>
              GET Deal
            </button>
          </div>

          {sourceDeal && (
            <pre className={styles.codeBlock}>
              {JSON.stringify(sourceDeal, null, 2)}
            </pre>
          )}
        </div>

        <div className={styles.card}>
        <div className={styles.transformationSection}>
          <h3 className={styles.cardTitle}>2. Deal Transformation Preview</h3>
          <p className={styles.sectionDescription}>
            See how the source deal is mapped and transformed into the
            schema expected by the lender's Loan Origination System.
          </p>
          <div className={styles.transformationFlow}>
            {/* SOURCE */}
            <div className={styles.transformColumn}>
              <div className={styles.transformHeader}>
                <span>Source Deal</span>
                <small>Partner API</small>
              </div>

              <div className={styles.transformCard}>
                <div className={styles.field}>
                  <span>id</span>
                  <strong>1</strong>
                </div>

                <div className={styles.field}>
                  <span>name</span>
                  <strong>Leanne Graham</strong>
                </div>

                <div className={styles.field}>
                  <span>email</span>
                  <strong>Sincere@april.biz</strong>
                </div>

                <div className={styles.field}>
                  <span>street</span>
                  <strong>Kulas Light</strong>
                </div>

                <div className={styles.field}>
                  <span>suite</span>
                  <strong>Apt. 556</strong>
                </div>

                <div className={styles.field}>
                  <span>city</span>
                  <strong>Salt Lake City</strong>
                </div>

                <div className={styles.field}>
                  <span>zipcode</span>
                  <strong>92998-3874</strong>
                </div>

                <div className={styles.field}>
                  <span>phone</span>
                  <strong>1-770-736-8031 x56442</strong>
                </div>

                <div className={styles.field}>
                  <span>website</span>
                  <strong>hildegard.org</strong>
                </div>

                <div className={styles.field}>
                  <span>company</span>
                  <strong>Romaguera-Crona</strong>
                </div>

              </div>
            </div>

            {/* TRANSFORMATION ARROW */}
            <div className={styles.transformArrow}>
              <span>Transform</span>
              <div>→</div>
            </div>

            {/* DESTINATION */}
            <div className={styles.transformColumn}>
              <div className={styles.transformHeader}>
                <span>Lender LOS</span>
                <small>Destination Schema</small>
              </div>

              <div className={styles.transformCard}>
                <div className={styles.field}>
                  <span>deal Id</span>
                  <strong>1</strong>
                </div>

                 <div className={styles.field}>
                  <span>status</span>
                  <strong>Condtionally Approved</strong>
                </div>

                <div className={styles.field}>
                  <span>First Name</span>
                  <strong>Leanne</strong>
                </div>

                <div className={styles.field}>
                  <span>Last Name</span>
                  <strong>Graham</strong>
                </div>

                <div className={styles.field}>
                  <span>Email Address</span>
                  <strong>Sincere@april.biz</strong>
                </div>

                <div className={styles.field}>
                  <span>Full Address</span>
                  <strong>Kulas Light Apt. 556</strong>
                </div>

                <div className={styles.field}>
                  <span>City</span>
                  <strong>Salt Lake City</strong>
                </div>

                <div className={styles.field}>
                  <span>Zip Code</span>
                  <strong>92998</strong>
                </div>

                <div className={styles.field}>
                  <span>phone</span>
                  <strong>(770) 736-8031 ext 56442</strong>
                </div>

                <div className={styles.field}>
                  <span>Company Website</span>
                  <strong>hildegard.org</strong>
                </div>

                <div className={styles.field}>
                  <span>Company Name</span>
                  <strong>Romaguera-Crona</strong>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>3. Run Sync Workflow</h3>
          <button onClick={syncDeals} className={styles.button}>
            Sync Deals
          </button>
          <p></p>
          {syncResult && (
            <div className={styles.resultGrid}>
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

        <div className={styles.card}>
          <h3 className={styles.cardTitle}>3. View Imported Loan Origination System Deals</h3>
          <button onClick={fetchLenderDeals} className={styles.button}>
            Load Lender Deals
          </button>

          {lenderDeals.length > 0 && (
            <pre className={styles.codeBlock}>
              {JSON.stringify(lenderDeals, null, 2)}
            </pre>
          )}
        </div>

        {loading && <p className={styles.status}>Loading...</p>}
        {error && <p className={styles.error}>{error}</p>}
      </section>
    </div>
  );
};

export default LenderIntegrationAPI;