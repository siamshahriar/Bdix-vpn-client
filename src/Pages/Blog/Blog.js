import React from "react";
import "./Blog.css";

const Blog = () => {
  return (
    <div className="container">
      <div className="qAnda">
        <p className="qus">What is cors?</p>
        <p className="ans">
          CORS stands for Cross-Origin Resource Sharing. It allows us to relax
          the security applied to an API. This is done by bypassing the
          Access-Control-Allow-Origin headers, which specify which origins can
          access the API. In other words, CORS is a browser security feature
          that restricts cross-origin HTTP requests with other servers and
          specifies which domains access your resources. An API is a set
          procedure for two programs to communicate. This means that API
          resources are consumed by other clients and servers. Here are two
          scenarios: The CORS same-origin concept The client and the server have
          the same origin. In this example, accessing resources will be
          successful. You’re trying to access resources on your server, and the
          same server handles the request. The CORS cross-origin concept The
          client and server have a different origin from each other, i.e.,
          accessing resources from a different server. In this case, trying to
          make a request to a resource on the other server will fail. This is a
          security concern for the browser. CORS comes into play to disable this
          mechanism and allow access to these resources. CORS will add a
          response header access-control-allow-origins and specify which origins
          are permitted. CORS ensures that we are sending the right headers.
          Therefore, a public server handling a public API will add a CORS
          related header to the response. The browser on the client machine will
          look at this header and decide whether it is safe to deliver that
          response to the client or not.
        </p>
      </div>
      <div className="qAnda">
        <p className="qus">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </p>
        <p className="ans">
          In the present era, user authentication is one of the most important
          requirements for Android apps. It is essential to authenticate users,
          and it is much harder if we have to write all this code on our own.
          This is done very easily with the help of Firebase.
          <ul>
            <li>
              Being able to authenticate our users securely, it offers a
              customized experience to them based on their interests and
              preferences.
            </li>
            <li>
              We can ensure that they have no problems accessing their private
              data while using our app from multiple devices.
            </li>
            <li>
              Firebase authentication supports authentication using a password,
              phone numbers, popular identity provider like Google, Facebook,
              and Twitter, etc.
            </li>
            <li>We can sign in users to our app by using the FirebaseUI.</li>
            <li>
              Firebase Authentication provides all the server-side stuff for
              authenticating the user. Firebase Authentication becomes easy with
              SDK. It makes API easy to use.
            </li>
            <li>
              Firebase Authentication also provides some user interface
              libraries which enable screens for us when we are logging it.
            </li>
            <li>
              Firebase authentication supports authentication using a password,
              phone numbers, popular identity provider like Google, Facebook,
              and Twitter, etc.
            </li>
            <li>We can sign in users to our app by using the FirebaseUI.</li>
            <li>
              It handles the UI flows for signing in user with an email address
              and password, phone numbers, and popular providers, including
              Google sign-In and Facebook Login.
            </li>
            <li>It can also handle cases like account recovery.</li>
            <li>
              It is not required to design a UI since it is already provided for
              us. It means we don't have to write the activities.
            </li>
            <li>
              We can also sign-in users using the Firebase Authentication SDK to
              integrate one or several sign-in methods into our app manually.
            </li>
          </ul>
          <p>
            Firebase UI Authentication is a way to add a complete sign-in system
            to our app, where Firebase provides user interface to them. Firebase
            UI provides a drop-in auth solution which is used to implement
            authentication on mobile devices and websites. Firebase UI can be
            easily customized to fit with the rest of our app's visual style. It
            is open-source, so we are not constrained in modifying the user
            experience to meet our apps need. There are the following steps to
            use Firebase UI Authentication:
            <ul>
              <li>Set up sign-in methods:</li>
              <li>Enable authentication method in the firebase console.</li>
              <li>
                For email address and password, phone number sign-in, and any
                identity providers.
              </li>
              <li>
                We have to complete the configuration if anyone requires for
                identity providers.
              </li>
              <li>Setting our OAuth redirect URL.</li>
              <li>Customize the sign-in UI.</li>
              <li>
                For customizing the sign-in and UI, we have to set some Firebase
                UI options or fork the code on GitHub.
              </li>
              <li>To perform the sign-in flow, use Firebase UI:</li>
              <li>Import the Firebase UI library.</li>
              <li>Specify the sign-in method which we want to support.</li>
              <li>Initiate the Firebase UI sign-in flow.</li>
            </ul>
          </p>
        </p>
      </div>
      <div className="qAnda">
        <p className="qus">How does the private route work?</p>
        <p className="ans">
          The private route component is similar to the public route, the only
          change is that redirect URL and authenticate condition. If the user is
          not authenticated he will be redirected to the login page and the user
          can only access the authenticated routes If he is authenticated
          (Logged in). Private Routes vary based on the Apps, For example,
          Dashboard, User Profile, App Settings, Home etc. In simple words,
          These routes can be accessed only after login. The constraints for
          Public and Private routes are that Public routes should not be
          accessed after login and Private routes should not be accessible
          before login.Public and Private routes will also restrict accessing
          the previously visited routes using the browser back button after
          logout.
        </p>
      </div>
      <div className="qAnda">
        <p className="qus">What is Node? How does Node work?</p>
        <p className="ans">
          Node.js is an open-source backend javascript runtime environment. It
          is a used as backend service where javascript works on the server-side
          of the application. This way javascript is used on both frontend and
          backend. Node.js runs on chrome v8 engine which converts javascript
          code into machine code, it is highly scalable, lightweight, fast, and
          data-intensive.
          <span className="d-block">
            <span className="fw-semibold">Working of Node.js:</span> Node.js
            accepts the request from the clients and sends the response, while
            working with the request node.js handles them with a single thread.
            To operate I/O operations or requests node.js use the concept of
            threads. Thread is a sequence of instructions that the server needs
            to perform. It runs parallel on the server to provide the
            information to multiple clients. Node.js is an event loop
            single-threaded language. It can handle concurrent requests with a
            single thread without blocking it for one request. Node.js basically
            works on two concept{" "}
            <ul>
              <li>Asynchronous</li>
              <li>Non-blocking I/O</li>
            </ul>{" "}
          </span>
          <span className="d-block">
            <span className="fw-semibold">Non-blocking I/o:</span>
            Non-blocking i/o means working with multiple requests without
            blocking the thread for a single request. I/O basically interacts
            with external systems such as files, databases. Node.js is not used
            for CPU-intensive work means for calculations, video processing
            because a single thread cannot handle the CPU works.
          </span>
          <span className="d-block">
            <span className="fw-semibold">Asynchronous:</span>Asynchronous is
            executing a callback function. The moment we get the response from
            the other server or database it will execute a callback function.
            Callback functions are called as soon as some work is finished and
            this is because the node.js uses an event-driven architecture. The
            single thread doesn’t work with the request instead it sends the
            request to another system which resolves the request and it is
            accessible for another request. To implement the concept of the
            system to handle the request node.js uses the concept of Libuv.
            Libuv is an open-source library built-in C. It has a strong focus on
            asynchronous and I/O, this gives node access to the underlying
            computer operating system, file system, and networking. Libuv
            implements two extremely important features of Thread pool
            <ul>
              <li>node.js</li>
              <li>Event loop</li>
            </ul>
          </span>
          <span className="d-block">
            <span className="fw-semibold">Event loop:</span>The event loop
            contains a single thread and is responsible for handling easy tasks
            like executing callbacks and network I/O. When the program is to
            initialize all the top-level code is executed, the code is not in
            the callback function. All the applications code that is inside
            callback functions will run in the event loop. EventLoop is the
            heart of node.js. When we start our node application the event loop
            starts running right away. Most of the work is done in the event
            loop. Nodejs use event-driven-architecture.
            <ul>
              <li>Events are emitted</li>
              <li>Event loop picks them up</li>
              <li>Callbacks are called</li>
            </ul>
          </span>
          <span className="d-block">
            <span className="fw-semibold">Event queue: </span>As soon as the
            request is sent the thread places the request into a queue. It is
            known as an event queue. The process like app receiving HTTP request
            or server or a timer will emit event as soon as they are done with
            the work and event loop will pick up these events and call the
            callback functions that are associated with each event and response
            is sent to the client. The event loop is an indefinite loop that
            continuously receives the request and processes them. It checks the
            queue and waits for the incoming request indefinitely.
          </span>
          <span className="d-block mt-1">
            <span className="fw-semibold">Thread pool:</span>Though node.js is
            single-threaded it internally maintains a thread pool. When
            non-blocking requests are accepted there are processed in an event
            loop, but while accepting blocking requests it checks for available
            threads in a thread pool, assigns a thread to the client’s request
            which is then processed and send back to the event loop, and
            response is sent to the respective client.
          </span>
        </p>
      </div>
    </div>
  );
};

export default Blog;
