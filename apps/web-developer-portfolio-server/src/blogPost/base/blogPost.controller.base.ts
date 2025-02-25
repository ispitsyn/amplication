/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { BlogPostService } from "../blogPost.service";
import { BlogPostCreateInput } from "./BlogPostCreateInput";
import { BlogPost } from "./BlogPost";
import { BlogPostFindManyArgs } from "./BlogPostFindManyArgs";
import { BlogPostWhereUniqueInput } from "./BlogPostWhereUniqueInput";
import { BlogPostUpdateInput } from "./BlogPostUpdateInput";

export class BlogPostControllerBase {
  constructor(protected readonly service: BlogPostService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: BlogPost })
  async createBlogPost(
    @common.Body() data: BlogPostCreateInput
  ): Promise<BlogPost> {
    return await this.service.createBlogPost({
      data: data,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        content: true,
        publishedDate: true,
        postTitle: true,
        postContent: true,
        postPublishedDate: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [BlogPost] })
  @ApiNestedQuery(BlogPostFindManyArgs)
  async blogPosts(@common.Req() request: Request): Promise<BlogPost[]> {
    const args = plainToClass(BlogPostFindManyArgs, request.query);
    return this.service.blogPosts({
      ...args,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        content: true,
        publishedDate: true,
        postTitle: true,
        postContent: true,
        postPublishedDate: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: BlogPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async blogPost(
    @common.Param() params: BlogPostWhereUniqueInput
  ): Promise<BlogPost | null> {
    const result = await this.service.blogPost({
      where: params,
      select: {
        id: true,
        createdAt: true,
        updatedAt: true,
        title: true,
        description: true,
        content: true,
        publishedDate: true,
        postTitle: true,
        postContent: true,
        postPublishedDate: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: BlogPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateBlogPost(
    @common.Param() params: BlogPostWhereUniqueInput,
    @common.Body() data: BlogPostUpdateInput
  ): Promise<BlogPost | null> {
    try {
      return await this.service.updateBlogPost({
        where: params,
        data: data,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,
          content: true,
          publishedDate: true,
          postTitle: true,
          postContent: true,
          postPublishedDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: BlogPost })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteBlogPost(
    @common.Param() params: BlogPostWhereUniqueInput
  ): Promise<BlogPost | null> {
    try {
      return await this.service.deleteBlogPost({
        where: params,
        select: {
          id: true,
          createdAt: true,
          updatedAt: true,
          title: true,
          description: true,
          content: true,
          publishedDate: true,
          postTitle: true,
          postContent: true,
          postPublishedDate: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
