import Accordion from 'react-bootstrap/Accordion';
import { Helmet } from 'react-helmet-async';

function Blog() {
  return (
    <div>
      <Helmet>
        <title>Blog</title>
      </Helmet>

      <Accordion defaultActiveKey="0" flush className='m-4 p-2' >
        <Accordion.Item eventKey="0">
          <Accordion.Header> Difference between SQL and NoSQL</Accordion.Header>
          <Accordion.Body>

            <h5>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</h5>
            <p>There are five practical differences between SQL and NoSQL:</p>
            <ol>
              <li>Language</li>
              <li>Scalability</li>
              <li>Structure</li>
              <li>Properties</li>
              <li>Support and communities</li>
            </ol>

          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>How JWT (JSON Web Token) authentication works?</Accordion.Header>
          <Accordion.Body>
            <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.</p>
            <p>It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Differences Between Node.js and JavaScript?</Accordion.Header>
          <Accordion.Body>
            JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>How does NodeJS handle multiple requests at the same time?</Accordion.Header>
          <Accordion.Body>
            NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default Blog;