import express from 'express';

import { prisma } from '../../../../infra/prisma';
import { auth } from '../../../../infra/http/middlewares/auth';
import { can } from '../../../../infra/http/middlewares/permissions';

// import { ListSpecificRoleController } from '../../../roles/use-cases/list-specific-role';

import { LoginUserController, RegisterUserController, RecoverUserPaswordController, SetUserNewPasswordController, RefreshUserTokenController } from '../../use-cases';
import { AuthenticateUserGithubController } from '../../use-cases/authenticate-user-github';
import { DisconnectUserAccountsController } from '../../use-cases/disconnect-user-accounts';
import { SetAccountThemeController } from '../../use-cases/set-account-theme';
import { ListAllRefreshTokensController } from '../../use-cases/list-all-refresh-tokens';
import { InvalidateRefreshTokenController } from '../../use-cases/invalidate-refresh-token';
import { ListUserRoles } from '../../use-cases/list-user-roles';

import { ListAllUsers } from '../../use-cases/list-all-users';
import { ListSpecificUser } from '../../use-cases/list-specific-user';
import { ListSpecificUserRole } from '../../use-cases/list-specific-user-role';
import { SetUserRole } from '../../use-cases/set-user-role';
import { SetUserToAdmin } from '../../use-cases/set-user-to-admin';
import { SetUserPermission } from '../../use-cases/set-user-permission';
import { ListUserPermissions } from '../../use-cases/list-user-permissions';
import { ListSpecificUserPermission } from '../../use-cases/list-specific-user-permission';
import { RemoveUserRole } from '../../use-cases/remove-user-role';
import { RemoveUserPermission } from '../../use-cases/remove-user-permission';
import { SetAccountLanguageController } from '../../use-cases/set-account-language';
import { LoadUserSettings } from '../../use-cases/load-user-settings';
import { AuthenticateUserNeo } from '../../use-cases/authenticate-user-neo';
import { ListUserByUsername } from '../../use-cases/list-user-by-username';
import { GetRefreshTokenData } from '../../use-cases/get-refresh-token-data';
import { DeleteAuthenticatedUserAccount } from '../../use-cases/delete-authenticated-user-account';
import { DeleteUserAccount } from '../../use-cases/delete-user-account';
import { MagicLinkAuthentication } from '../../use-cases/magic-link-authentication';

// eslint-disable-next-line new-cap
export const authRouter = express.Router();
authRouter.post('/refresh-token', RefreshUserTokenController);
authRouter.get('/refresh-token', auth, ListAllRefreshTokensController);
authRouter.get('/refresh-token/:jwt', auth, GetRefreshTokenData);
authRouter.delete('/refresh-token', auth, InvalidateRefreshTokenController);

// eslint-disable-next-line new-cap
export const usersRouter = express.Router();
usersRouter.post('/login/magic', MagicLinkAuthentication);
usersRouter.get('/', ListAllUsers);
usersRouter.post('/username', ListUserByUsername);
usersRouter.get('/:id', ListSpecificUser);
usersRouter.get('/:id/access-control-list', ListUserRoles);

usersRouter.get('/:id/roles', ListUserRoles);
usersRouter.get('/:id/roles/:roleId', ListSpecificUserRole);
usersRouter.post('/:id/roles/:roleId', auth, can(['admin', 'set_user_role']), SetUserRole);
usersRouter.delete('/:id/roles/:roleId', auth, can(['admin', 'remove_user_role']), RemoveUserRole);

usersRouter.get('/:id/permissions', ListUserPermissions);
usersRouter.get('/:id/permissions/:permissionId', ListSpecificUserPermission);
usersRouter.post('/:id/permissions/:permissionId', auth, can(['admin', 'set_user_permission']), SetUserPermission);
usersRouter.delete('/:id/permissions/:permissionId', auth, can(['admin', 'remove_user_permission']), RemoveUserPermission);

usersRouter.post('/:id/admin', auth, SetUserToAdmin);

usersRouter.post('/', RegisterUserController);

usersRouter.post('/login', LoginUserController);
usersRouter.post('/register', RegisterUserController);
usersRouter.delete('/:id', auth, DeleteUserAccount);
usersRouter.delete('/', auth, DeleteAuthenticatedUserAccount);

usersRouter.post('/profile', auth, async (request, response) => {
  const { id } = request.user;

  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
      select: {
        id: true,
      },
    });

    if (!user) {
      throw new Error('Could not find a user with that e-mail.');
    }

    return response.status(200).json(user);
  } catch (error) {
    return response.status(400).json({
      error: (error as Error).message,
    });
  }
});

usersRouter.get('/profile/settings', auth, LoadUserSettings);
usersRouter.post('/profile/settings/theme', auth, SetAccountThemeController);
usersRouter.post('/profile/settings/language', auth, SetAccountLanguageController);

usersRouter.post('/forgot-password', RecoverUserPaswordController);
usersRouter.post('/set-new-password', SetUserNewPasswordController);

usersRouter.post('/disconnect', auth, DisconnectUserAccountsController);

usersRouter.post('/authenticate/github', AuthenticateUserGithubController);
usersRouter.post('/authenticate/neo', AuthenticateUserNeo);

usersRouter.get('/login/oauth/github', (_, response) => {
  return response.redirect(`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.GITHUB_CLIENT_ID}`);
});

usersRouter.get('/login/oauth/neo', (_, response) => {
  return response.redirect(`${process.env.NEO_CLIENT_OAUTH_URL}?scope=user&client_id=${process.env.NEO_CLIENT_ID}`);
});
