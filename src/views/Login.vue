<template>
    <div id="frame">
        <div id="login">
            <el-row style="line-height: 50px;margin-top: 50px">
                <el-col :span="8" style="border-right: 1px black solid;margin-left: 100px">
                    <el-link :class={select:isSelectedAccount}
                             @mousemove.native="changeScanCodeToAccount"
                             :underline="false">账号登录
                    </el-link>
                </el-col>
                <el-col :span="8">
                    <el-link :class={select:isSelectedScanCode}
                             @mousemove.native="changeAccountToScanCode"
                             :underline="false">扫码登录
                    </el-link>
                </el-col>
            </el-row>
            <div v-if="isSelectedAccount" style="margin-top: 70px">
                <el-form :model="account" label-width="100px" style="width: 450px;margin-left: 40px;">
                    <el-form-item label="用户名" prop="username">
                        <el-input type="username" v-model="account.username"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="account.password"></el-input>
                    </el-form-item>
                </el-form>
                <el-row style="margin-top: 10px;">
                    <button style="margin-left: 25px">登录</button>
                </el-row>
                <el-row style="margin-left: 220px;margin-top: 8px">
                    <el-link @click="openRegister"
                             style="font-size: 13px;color: #757575"
                             :underline="false">立即注册
                    </el-link>
                    <el-divider direction="vertical"></el-divider>
                    <el-link :underline="false" style="font-size: 13px;color: #757575">忘记密码?</el-link>

                </el-row>
            </div>
            <div v-else style="margin-top: 90px">
                <img src="data:image/png;base64,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">
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                account: {
                    username: '',
                    password: ''
                },
                isSelectedAccount: true,
                isSelectedScanCode: false
            }
        },
        methods: {
            changeAccountToScanCode() {
                this.isSelectedAccount = false;
                this.isSelectedScanCode = true;
            },
            changeScanCodeToAccount() {
                this.isSelectedAccount = true;
                this.isSelectedScanCode = false;
            },
            openRegister() {
                this.$router.push('/register');
            }

        }
    }
</script>

<style scoped>
    #frame {
        height: 600px;
    }

    #login {
        border: #cccfcf solid 1px;
        width: 600px;
        height: 600px;
        margin-right: auto;
        margin-left: auto;
        text-align: center;
        margin-top: 70px;
        background-color: white;
    }

    .el-link {
        font-size: 24px;
        color: #666666;

    }

    input {
        height: 40px;
        width: 350px;
        outline: none;
        text-indent: 10px;
    }

    button {
        background-color: #2C9CFA;
        width: 360px;
        height: 50px;
        color: white;
        font-size: 14px;
        margin-top: 15px;
    }

    button:focus {
        border-color: #2C9CFA;
        outline: none;
    }

    .el-input.is-active {
        border-color: #cccfcf;
    }

</style>