import ACCESS_ENUM from '@/access/accessEnum';

/**
 *  检查权限（判断当前登录用户是否有某个权限）
 * @param loginUser  当前登录用户
 * @param needAccess  需要有的权限
 * @return boolean 有无权限
 */
const checkAccess = (loginUser: any, needAccess) => {
  //获取当前登录用户具有的权限(如果没有loginUser表示未登录)
  const loginUserAccess = loginUser?.userRole ?? ACCESS_ENUM.NOT_LOGIN;
  if (needAccess === ACCESS_ENUM.NOT_LOGIN) {
    return true;
  }
  if (needAccess === ACCESS_ENUM.USER) {
    if (loginUserAccess === ACCESS_ENUM.NOT_LOGIN) {
      return false;
    }
    return true;
  }
  if (needAccess === ACCESS_ENUM.ADMIN) {
    if (loginUserAccess !== ACCESS_ENUM.ADMIN) {
      return false;
    }
    return true;
  }
};

export default checkAccess;
