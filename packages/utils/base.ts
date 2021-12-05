/*
 * @Author: Gavin Chan
 * @Date: 2021-12-05 22:17:52
 * @LastEditors: Gavin
 * @LastEditTime: 2021-12-05 22:21:40
 * @FilePath: \antdv-wings\packages\utils\base.ts
 * @Descriptions: todo
 */
export function composeExport<T, S>(p: T, arg: S): T & S {
  return Object.assign({}, p, arg);
}
