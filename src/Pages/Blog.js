import Accordion from 'react-bootstrap/Accordion';

function Blog() {
  return (
    <Accordion defaultActiveKey="0" flush className='m-4 p-2' >
      <Accordion.Item eventKey="0">
        <Accordion.Header> what is cors?</Accordion.Header>
        <Accordion.Body>
          Cross-origin resource sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
        <Accordion.Body>
          Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Here are some of the alternatives.

          <ul>
            <li>MongoDB</li>
            <li>Couchbase Server</li>
            <li>Oracle Database</li>
            <li>Amazon Redshift</li>
            <li>DataStax Enterprise</li>
            <li>Redis Enterprise Cloud</li>
            <li>Cloudera Enterprise Data Hub</li>
            <li>Db2</li>
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>How does the private route work?</Accordion.Header>
        <Accordion.Body>
          The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header> What is Node? How does Node work?</Accordion.Header>
        <Accordion.Body>
          It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default Blog;