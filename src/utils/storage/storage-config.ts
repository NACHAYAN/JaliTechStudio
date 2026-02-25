/**
 * 存储配置管理模块
 * 
 * 提供统一的本地存储配置和工具
 * 
 * ## 主要功能
 * - 统一的本地存储配置
 * - 本地存储工具
 * - 本地存储事件监听
 * 
 * ## 使用方法
 * 
 * 
 * @module utils/storage/storage-config
 * @author __APP_AUTHOR__
 */

export class StorageConfig {
    // 应用版本号
    static readonly CURRENT_VERSION = __APP_VERSION__

    // 本地存储前缀
    static readonly STORAGE_PREFIX = 'jls-v'

    // 主题存储键
    static readonly THEME_KEY = 'sys-theme'

    /** 生成版本化存储键
     * @param storeID 存储ID
     * @param version 版本号,默认使用当前版本号
     * @returns 版本化存储键
     */
    static generateStorageKey(storeID: string, version: string = this.CURRENT_VERSION): string {
        return `${this.STORAGE_PREFIX}${version}-${storeID}`
    }
}