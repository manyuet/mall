<template>
    <div id="frame">
        <div id="register">
            <el-row style="line-height: 50px;margin-top: 30px">
                <p style="text-align: center; font-size: 26px;color: #666666">注册界面</p>
            </el-row>
            <el-form :model="account" :rules="rules" ref="account" label-width="100px" style="width: 400px">
                <el-form-item label="用户名" prop="username">
                    <el-input type="username" v-model="account.username"></el-input>
                </el-form-item>
                <el-form-item label="手机号码" prop="phoneNumber">
                    <el-input type="phoneNumber" v-model.number="account.phoneNumber"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="mailBox">
                    <el-input type="mailBox" v-model="account.mailBox"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="pass">
                    <el-input type="password" v-model="account.pass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                    <el-input type="password" v-model="account.checkPass" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item style="text-align: center">
                    <el-button type="primary" @click="handelRegister()">提交</el-button>
                    <el-button type="primary" @click="resetForm('account')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else {
                    if (this.account.checkPass !== '') {
                        this.$refs.account.validateField('checkPass');
                    }
                    callback();
                }
            };
            const validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请再次输入密码'));
                } else if (value !== this.account.pass) {
                    callback(new Error('两次输入密码不一致!'));

                } else {
                    callback();
                }
            };
            return {

                account: {
                    pass: '',
                    checkPass: '',
                    username: '',
                    phoneNumber: '',
                    mailBox: ''
                },
                rules: {
                    pass: [
                        {validator: validatePass, trigger: 'blur',required:true}
                    ],
                    checkPass: [
                        {validator: validatePass2, trigger: 'blur',required:true}
                    ],
                    username: [
                        {required: true, message: '请输入用户名', trigger: 'blur'}
                    ],
                    phoneNumber: [
                        {required: true, type: 'number', message: '手机号码必须为数字', trigger: 'blur'},
                        {min: 11, max: 11, message: '手机号码长度为11个数字', trigger: 'blur'}
                    ],
                    mailBox: [
                        {required: true, message: '请输入邮箱地址', trigger: 'blur'},
                        {type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
                    ]
                }
            }
        },
        methods: {

            handelRegister() {
                if (this.account.pass === this.account.checkPass && this.account.username !== '') {
                    this.$message({
                        message: '恭喜你，账户注册成功',
                        type: 'success'
                    });
                    const accountList = JSON.parse(localStorage.getItem('accountList')) || [];
                    accountList.push(this.account);
                    localStorage.setItem('accountList', JSON.stringify(accountList));
                    this.account.username = '';
                    this.account.pass = '';
                    this.account.checkPass = '';
                    setTimeout(() => {
                        this.$router.push('/login')
                    }, 1000);


                } else {
                    this.$message({
                        message: '警告哦，注册失败',
                        type: 'warning'
                    });
                }
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>

<style scoped>
    #frame {
        height: 600px;

    }

    #register {
        background-color: white;
        border: 1px solid #cccfcf;
        width: 600px;
        height: 600px;
        margin-right: auto;
        margin-left: auto;
        margin-top: 70px;
    }

    .el-form {
        margin-left: 60px;
    }
    .el-button--primary{
        background-color: #fc6720;
        border-color: #fc6720;
    }
    .el-button--primary:active{
        background-color: #fc6720;
        border-color: #fc6720;
    }

</style>