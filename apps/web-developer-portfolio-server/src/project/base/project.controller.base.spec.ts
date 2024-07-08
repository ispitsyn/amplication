import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { ProjectController } from "../project.controller";
import { ProjectService } from "../project.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  description: "exampleDescription",
  startDate: new Date(),
  endDate: new Date(),
  projectName: "exampleProjectName",
  projectDescription: "exampleProjectDescription",
  projectStartDate: new Date(),
  projectEndDate: new Date(),
};
const CREATE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  description: "exampleDescription",
  startDate: new Date(),
  endDate: new Date(),
  projectName: "exampleProjectName",
  projectDescription: "exampleProjectDescription",
  projectStartDate: new Date(),
  projectEndDate: new Date(),
};
const FIND_MANY_RESULT = [
  {
    id: "exampleId",
    createdAt: new Date(),
    updatedAt: new Date(),
    name: "exampleName",
    description: "exampleDescription",
    startDate: new Date(),
    endDate: new Date(),
    projectName: "exampleProjectName",
    projectDescription: "exampleProjectDescription",
    projectStartDate: new Date(),
    projectEndDate: new Date(),
  },
];
const FIND_ONE_RESULT = {
  id: "exampleId",
  createdAt: new Date(),
  updatedAt: new Date(),
  name: "exampleName",
  description: "exampleDescription",
  startDate: new Date(),
  endDate: new Date(),
  projectName: "exampleProjectName",
  projectDescription: "exampleProjectDescription",
  projectStartDate: new Date(),
  projectEndDate: new Date(),
};

const service = {
  createProject() {
    return CREATE_RESULT;
  },
  projects: () => FIND_MANY_RESULT,
  project: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("Project", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ProjectService,
          useValue: service,
        },
      ],
      controllers: [ProjectController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /projects", async () => {
    await request(app.getHttpServer())
      .post("/projects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        projectStartDate: CREATE_RESULT.projectStartDate.toISOString(),
        projectEndDate: CREATE_RESULT.projectEndDate.toISOString(),
      });
  });

  test("GET /projects", async () => {
    await request(app.getHttpServer())
      .get("/projects")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
          startDate: FIND_MANY_RESULT[0].startDate.toISOString(),
          endDate: FIND_MANY_RESULT[0].endDate.toISOString(),
          projectStartDate: FIND_MANY_RESULT[0].projectStartDate.toISOString(),
          projectEndDate: FIND_MANY_RESULT[0].projectEndDate.toISOString(),
        },
      ]);
  });

  test("GET /projects/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/projects"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /projects/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/projects"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
        startDate: FIND_ONE_RESULT.startDate.toISOString(),
        endDate: FIND_ONE_RESULT.endDate.toISOString(),
        projectStartDate: FIND_ONE_RESULT.projectStartDate.toISOString(),
        projectEndDate: FIND_ONE_RESULT.projectEndDate.toISOString(),
      });
  });

  test("POST /projects existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/projects")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
        startDate: CREATE_RESULT.startDate.toISOString(),
        endDate: CREATE_RESULT.endDate.toISOString(),
        projectStartDate: CREATE_RESULT.projectStartDate.toISOString(),
        projectEndDate: CREATE_RESULT.projectEndDate.toISOString(),
      })
      .then(function () {
        agent
          .post("/projects")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
