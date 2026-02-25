/**
 * Pinia Store 配置模块
 *
 * 提供全局状态管理的初始化和配置
 *
 * ## 主要功能
 *
 * - Pinia Store 实例创建
 * - 持久化插件配置（pinia-plugin-persistedstate）
 *
 * @module store/index
 * @author __APP_AUTHOR__ <<support@account.jalitech.cn>>
 */
import type { App } from "vue";
import { createPinia } from "pinia";
import { createPersistedState } from "pinia-plugin-persistedstate";
import { StorageConfig } from "@utils/storage"

export const store = createPinia();

store.use(
  createPersistedState({
    key: (storeID: string) => StorageConfig.generateStorageKey(storeID),
    storage: localStorage
  })
)

export function setupStore(app: App<Element>): void {
  app.use(store)
}