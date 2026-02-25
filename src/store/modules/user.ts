/**
 * store/modules/user.ts
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useUserStore = defineStore(
    'userStore',
    () => {
        // 用户信息
        const userinfo = ref({});
        // 访问令牌
        const accessToken = ref('');
        // 刷新令牌
        const refreshToken = ref('');

        /**
         * 设置访问令牌
         * @param newAccessToken 访问令牌
         * @param newRefreshToken 刷新令牌
         */
        const setToken = (newAccessToken: string, newRefreshToken: string) => {
            accessToken.value = newAccessToken;
            if (newRefreshToken) {
                refreshToken.value = newRefreshToken;
            }
        };

        /**
         * 退出所有登录状态
         * 清空所有用户信息并跳转到登录页面
         */
        const logOut = () => {
            userinfo.value = {};
            accessToken.value = '';
            refreshToken.value = '';
        };

        return {
            userinfo,
            accessToken,
            refreshToken,
            setToken,
            logOut
        };
    },
    {
        persist: {
            key: 'user',
            storage: localStorage,
        }
    },
);