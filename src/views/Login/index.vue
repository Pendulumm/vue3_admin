<template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form" :model="loginForm" :rules="rules" ref="loginFormRef">
                    <h1>Hello</h1>
                    <h2>欢迎来到硅谷甄选</h2>
                    <el-form-item prop="username">
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item prop="password">
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="">
                        <el-button class="login_btn" type="primary" @click="login(loginFormRef)" :loading="loading">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/modules/user';
import { getTime } from '@/utils/time';
import { User, Lock } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus';
import type { FormInstance } from 'element-plus'
import { reactive, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
// 收集账号与密码的数据
let loginForm = reactive({ username: 'admin', password: '111111' })
// 控制按钮加载效果
let loading = ref(false)
// 获取el-form
let loginFormRef = ref()
// 登录按钮的回调
const login = async (loginFormRef: FormInstance) => {
    if (!loginFormRef) return
    loading.value = true;
    await loginFormRef.validate(async (valid, fields) => {
        if (valid) {
            try {
                await userStore.login(loginForm);
                loading.value = false;
                let redirect = route.query.redirect as string;
                redirect ? router.push(redirect) : router.push('/')
                // router.push('/');
                ElNotification({
                    type: 'success',
                    message: '欢迎回来',
                    title: `HI,${getTime()}好`,
                    duration: 1500
                })
            } catch (error: any) {
                loading.value = false;
                ElNotification({
                    type: 'error',
                    message: error.message
                })
            }
        } else {
            console.log('error submit!', fields)
        }
    })
}
// 自定义校验规则函数
const validateUsername = (rule: any, value: any, callback: any) => {
    if (value.length >= 5 && value.length <= 10) {
        callback();
    } else {
        callback(new Error('账号长度5-10位'))
    }
}
const validatePassword = (rule: any, value: any, callback: any) => {
    if (value.length >= 6 && value.length <= 10) {
        callback();
    } else {
        callback(new Error('密码长度6-15位'))
    }
}

// 定义表单校验需要配置的对象
const rules = {
    username: [
        /*  { required: true, message: '用户名不能为空', trigger: 'blur' },
         { min: 5, max: 10, message: '账号长度5-10位', trigger: 'change' }, */
        { validator: validateUsername, trigger: 'change' }
    ],
    password: [
        // { required: true, min: 6, max: 15, message: '密码长度6-15位', trigger: 'change' }
        { validator: validatePassword, trigger: 'change' }
    ]
}


</script>

<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('@/assets/images/background.jpg');
    background-size: cover;

    .login_form {
        width: 80%;
        position: relative;
        top: 30vh;
        background: url('@/assets/images/login_form.png');
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            color: white;
            font-size: 20px;
            margin: 20px 0;
        }

        .login_btn {
            width: 100%;
        }
    }
}
</style>