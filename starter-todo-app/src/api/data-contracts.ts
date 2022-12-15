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

/** Represents a Todo item */
export interface Todo {
  /**
   * Id of the todo. Positive integer. Uniquely identifies the Todo item
   * in the system
   * @format int32
   */
  id?: number;
  /**
   * Position of the todo in the list
   * @format int32
   */
  order?: number | null;
  /** Title of the todo. Explains what the task is about. */
  title?: string | null;
  /** Reference to the url that can be used to get the details of the item. */
  url?: string | null;
  /** Indicates whether the task is complete or not. */
  completed?: boolean;
}
