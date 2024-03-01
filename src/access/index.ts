import router from '@/router';
import store from '@/store';
import ACCESS_ENUM from './accessEnum';
import checkAccess from '@/access/checkAccess';

router.beforeEach(async (to, from, next) => {
  const loginUser = store.state.user.loginUser;

  // // 自动登录
  // if (!loginUser || !loginUser.userRole) {
  //   await store.dispatch('user/getLoginUser');
  // }

  const needAccess = (to.meta?.access as string) ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess !== ACCESS_ENUM.NOT_LOGIN) {
    if (!loginUser || !loginUser.userRole) {
      next(`/user/login?redirect=${to.fullPath}`);
      return;
    }
    if (!checkAccess(loginUser, needAccess)) {
      next('/noAuth');
      return;
    }
  }
  next();
});
