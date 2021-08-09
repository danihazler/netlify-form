import { useState, useEffect } from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if ( window.location.search.includes('success=true') ) {
      setSuccess(true);
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Contact Me
        </h1>

        {success && (
          <p style={{ color: 'green'}}>
            Successfully submitted form!
          </p>
        )}

        <div className={styles.grid}>
          <div className={styles.card}>
            <form name="contact" method="POST" action="/?success=true" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <p>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" id="firstName" name="firstName" />
              </p>
              <p>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" name="lastName" />
              </p>
              <p>
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" />
              </p>
              <p>
              <label htmlFor="people">How many people: 
                <select name="people" id="people">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              </p>
              <p>
                <label htmlFor="termsandconditions">Agree with T&amp;C: <input required type="checkbox" name="termsandconditions" id="termsandconditions"/></label>
              </p>
              <p>
                <label htmlFor="oktobecontacted">Agree to be contacted: <input required type="checkbox" name="oktobecontacted" id="oktobecontacted"/></label>
              </p>
              <p>
                <button type="submit">Send</button>
              </p>
            </form>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
