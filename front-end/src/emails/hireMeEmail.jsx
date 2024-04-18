import * as React from 'react'

export const HireMeEmail = ({ name, email, message }) => (
  <div
    style={{
      backgroundColor: 'aliceblue',
      textAlign: 'center',
      padding: '32px',
    }}
  >
    <h1 style={{ margin: '0' }}>Hello,</h1>

    <p style={{ marginTop: '8px' }}>
      <strong>{name}</strong> ({email}) send you a message:
    </p>
    <p style={{ padding: '6px', fontSize: '1rem' }}>
      &quot;<i>{message}</i>&quot;
    </p>
  </div>
)
