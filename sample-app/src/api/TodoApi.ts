/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import { Todo } from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class TodoApi<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags Todo
   * @name TodoList
   * @summary Returns the list of all todos
   * @request GET:/Todo
   */
  todoList = (params: RequestParams = {}) =>
    this.request<Todo[], any>({
      path: `/Todo`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Todo
   * @name TodoCreate
   * @summary Creates a new todo item
   * @request POST:/Todo
   */
  todoCreate = (data: Todo, params: RequestParams = {}) =>
    this.request<Todo, any>({
      path: `/Todo`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Todo
   * @name TodoDeleteAll
   * @summary Deletes all todo items
   * @request DELETE:/Todo
   */
  todoDeleteAll = (params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/Todo`,
      method: "DELETE",
      ...params,
    });
  /**
   * No description
   *
   * @tags Todo
   * @name TodoDetail
   * @summary Gets a Todo by its id
   * @request GET:/Todo/{id}
   */
  todoDetail = (id: number, params: RequestParams = {}) =>
    this.request<Todo, any>({
      path: `/Todo/${id}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Todo
   * @name TodoPartialUpdate
   * @summary Modifies an existing todo item
   * @request PATCH:/Todo/{id}
   */
  todoPartialUpdate = (id: number, data: Todo, params: RequestParams = {}) =>
    this.request<Todo, any>({
      path: `/Todo/${id}`,
      method: "PATCH",
      body: data,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Todo
   * @name TodoDeleteById
   * @summary Deletes an existing todo item by its id
   * @request DELETE:/Todo/{id}
   * @originalName todoDelete
   * @duplicate
   */
  todoDeleteById = (id: number, params: RequestParams = {}) =>
    this.request<void, any>({
      path: `/Todo/${id}`,
      method: "DELETE",
      ...params,
    });
}
