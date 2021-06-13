let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require("../index");

//Assertion Style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () =>{

    /**
     * Test the GET route
     */
     describe("GET /api/tasks", () => {
        it("It should GET all the tasks", (done) => {
            chai.request(server)
                .get("/api/task")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });

    });


    
    /**
     * Test the POST route
     */
     describe("POST /api/tasks", () => {
        it("It should post a new task", (done) => {
            chai.request(server)
                .post("/api/task")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });
     });

    /**
     * Test the PUT route
     */
     describe("PUT /api/tasks", () => {
        it("It should put an existing task", (done) => {
            chai.request(server)
                .put("/api/task")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });
     });

    /**
     * Test the DELETE route
     */
     describe("DELETE /api/tasks", () => {
        it("It should  delete an existing task", (done) => {
            chai.request(server)
                .delete("/api/task")
                .end((err, response) => {
                    response.should.have.status(404);
                done();
                });
        });
     });

});