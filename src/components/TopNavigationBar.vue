<template>
    <div style="background-color:#424242;">
        <el-row style="line-height: 40px;" >
            <el-col :span="18">
                <el-link style="margin-left: 5px" :underline="false" @click="openHome">{{$t('m.mall')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.miui')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.cloud')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.finance')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.product')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.platform')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.group')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.qualification')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.rules')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.download')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.select')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false" @click="switchLanguage">{{$t('m.switch')}}</el-link>
            </el-col>
            <el-col :span="5" :offset="1">
                <el-link v-if="!this.account"
                         :underline="false"
                         @click="openLogin">{{$t('m.login')}}
                </el-link>
                <el-divider v-if="!this.account" direction="vertical"></el-divider>
                <el-link v-if="!this.account"
                         :underline="false"
                         @click.native="openRegister">{{$t('m.register')}}
                </el-link>

                <el-dropdown v-if="this.account">
                      <span class="el-dropdown-link"
                            @click.native="openPersonal">{{this.account}}
                          <i class="el-icon-arrow-down el-icon--right"></i>
                      </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>
                            <el-link @click.native="openPersonal" :underline="false">{{$t('m.personal')}}</el-link>
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-link @click.native="loginOut" :underline="false">{{$t('m.loginout')}}</el-link>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false">{{$t('m.message')}}</el-link>
                <el-divider direction="vertical"></el-divider>
                <el-link :underline="false" @click="openShoppingCart">
                    <span class="icon ShoppingCart"><font-awesome-icon
                            :icon="['fas', 'shopping-cart']"></font-awesome-icon></span>
                    {{$t('m.cart')}}
                </el-link>
            </el-col>

        </el-row>
    </div>
</template>


<script>
    export default {
        name: "TopNavigationBar",
        methods: {
            openLogin() {
                const {href} = this.$router.resolve({
                    name: "Login",
                });
                this.$router.push(href);
            },
            openRegister() {
                this.$router.push('/register');
            },
            openShoppingCart() {
                this.$router.push("/shoppingCart")
            },
            openHome() {
                this.$router.push("/")
            },
            openPersonal() {
                this.$router.push("/personal")
            },
            loginOut() {
                this.$store.commit('loginOut');
                this.$router.push('/')
            },
            switchLanguage(){
                let m=this.$i18n.locale==='zh'?'en':'zh'
                this.$i18n.locale=m
            }
        },
        computed: {
            account() {
                return this.$store.state.userInfo.account.username
            }
        }
    }
</script>

<style scoped>
    .el-link {
        color: rgb(163, 163, 163);
        font-size: 12px;
    }

    .el-link.el-link--default:hover {
        color: white;
    }

    .el-link.el-link--default {
        color: rgb(163, 163, 163);
    }

    .el-divider {
        background-color: #777777;
    }

    .el-dropdown-link {
        cursor: pointer;
        color: rgb(163, 163, 163);

    }

    .el-icon-arrow-down {
        font-size: 12px;
    }
</style>