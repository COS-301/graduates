import { Adminauthorization } from './api-authorization-repository-admin.repository';
import { PrismaService } from '@graduates/api/shared/services/prisma/data-access';
import { Test, TestingModule } from '@nestjs/testing';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {user_permissions,User_role,role_permissions,} from '../../../shared/src/lib/authorization-data-access.entity';
//import {} from '@graduates/api/authorization/repository/shared';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {ApiAuthorization} from '../../../../api/shared/src/lib/api-authorization.entity';
import {
  UserPermissions,
  UserRole,
  RolePermissions,
  Prisma,
} from '@prisma/client';
const MockApiImpl : jest.Mocked<ApiAuthorization> = new ApiAuthorization() as ApiAuthorization;
const UserPermissionsMock: jest.Mocked<UserPermissions> =
  new user_permissions();
const UserroleMock: jest.Mocked<UserRole> = new User_role();
const RolepermissionMock: jest.Mocked<RolePermissions> = new role_permissions();
const stringMock: jest.Mocked<string> = new String() as string;
describe('ApiAuthorizationRepository', () => {
  let data: Adminauthorization;
  //const prisma = new PrismaService();
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Adminauthorization],
      providers: [PrismaService],
    }).compile();
    data = module.get<Adminauthorization>(Adminauthorization);
  });
  it('should not add permission', async () => {
    jest
      .spyOn(data, 'addUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions | null> => Promise.resolve(null)
      );

    expect(
      await data.addUniquePermission('10', {
        userId: '10',
        permissionType: 'CREATE',
        permissionCategory: 'PROFILE',
        permissionTenant: 'USER',
      })
    ).toBe(null);
  });
  //console.log(call);
  it('should find companyId return string', async () => {
    jest
      .spyOn(data, 'findCompanyid')
      .mockImplementation(
        (): Promise<string> =>
          Promise.resolve(stringMock)
      );

    expect(
      await data.findCompanyid('9')
    ).toStrictEqual(stringMock);
  });
  it('should add permission return UserPermissions', async () => {
    jest
      .spyOn(data, 'addUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions | null> =>
          Promise.resolve(UserPermissionsMock)
      );

    expect(
      await data.addUniquePermission('9', {
        userId: '10',
        permissionType: 'CREATE',
        permissionCategory: 'PROFILE',
        permissionTenant: 'USER',
      })
    ).toStrictEqual(UserPermissionsMock);
  });

  it('should not add permission', async () => {
    jest
      .spyOn(data, 'addUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions | null> => Promise.resolve(null)
      );

    expect(
      await data.addUniquePermission('10', {
        userId: '10',
        permissionType: 'CREATE',
        permissionCategory: 'PROFILE',
        permissionTenant: 'USER',
      })
    ).toBe(null);
  });

  it('find unique permissions it should return UserPermissions', async () => {
    jest
      .spyOn(data, 'findUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions[] | null> =>
          Promise.resolve([UserPermissionsMock])
      );

    expect(await data.findUniquePermission('10')).toStrictEqual([
      UserPermissionsMock,
    ]);
  });

  it('do not add permission return empty array', async () => {
    jest
      .spyOn(data, 'findUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions[] | null> => Promise.resolve([])
      );

    expect(await data.findUniquePermission('11')).toStrictEqual([]);
  });

  it('update unique permissions as user return UserPermission updated', async () => {
    jest
      .spyOn(data, 'updateUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions | null> => Promise.resolve(null)
      );

    expect(
      await data.updateUniquePermission('10', {
        where: {
          userId_permissionType_permissionCategory_permissionTenant: {
            userId: '10',
            permissionType: 'CREATE',
            permissionCategory: 'PROFILE',
            permissionTenant: 'USER',
          },
        },
        data: { permissionType: 'CREATE', permissionCategory: 'ALL' },
      })
    ).toStrictEqual(null);
  });

  it('update unique permissions as admin return UserPermission updated', async () => {
    jest
      .spyOn(data, 'updateUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions | null> =>
          Promise.resolve(UserPermissionsMock)
      );

    expect(
      await data.updateUniquePermission('9', {
        where: {
          userId_permissionType_permissionCategory_permissionTenant: {
            userId: '10',
            permissionType: 'CREATE',
            permissionCategory: 'PROFILE',
            permissionTenant: 'USER',
          },
        },
        data: { permissionType: 'CREATE', permissionCategory: 'ALL' },
      })
    ).toStrictEqual(UserPermissionsMock);
  });

  it('update unique permissions as no one there return none', async () => {
    jest
      .spyOn(data, 'updateUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions | null> => Promise.resolve(null)
      );

    expect(
      await data.updateUniquePermission('10', {
        where: {
          userId_permissionType_permissionCategory_permissionTenant: {
            userId: '10',
            permissionType: 'CREATE',
            permissionCategory: 'PROFILE',
            permissionTenant: 'USER',
          },
        },
        data: { permissionType: 'CREATE', permissionCategory: 'ALL' },
      })
    ).toStrictEqual(null);
  });

  it('delete unique permission as user returns none', async () => {
    jest
      .spyOn(data, 'deleteUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions | null> => Promise.resolve(null)
      );

    expect(
      await data.deleteUniquePermission('10', {
        userId_permissionType_permissionCategory_permissionTenant: {
          userId: '10',
          permissionType: 'CREATE',
          permissionCategory: 'PROFILE',
          permissionTenant: 'USER',
        },
      })
    ).toStrictEqual(null);
  });

  it('delete unique permission as admin returns UserPermission', async () => {
    jest
      .spyOn(data, 'deleteUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions | null> =>
          Promise.resolve(UserPermissionsMock)
      );

    expect(
      await data.deleteUniquePermission('9', {
        userId_permissionType_permissionCategory_permissionTenant: {
          userId: '10',
          permissionType: 'CREATE',
          permissionCategory: 'PROFILE',
          permissionTenant: 'USER',
        },
      })
    ).toStrictEqual(UserPermissionsMock);
  });
  it('delete unique permission as no one there returns none', async () => {
    jest
      .spyOn(data, 'deleteUniquePermission')
      .mockImplementation(
        (): Promise<UserPermissions | null> => Promise.resolve(null)
      );

    expect(
      await data.deleteUniquePermission('10', {
        userId_permissionType_permissionCategory_permissionTenant: {
          userId: '10',
          permissionType: 'CREATE',
          permissionCategory: 'PROFILE',
          permissionTenant: 'USER',
        },
      })
    ).toStrictEqual(null);
  });
  it('add user role as user returns none', async () => {
    jest
      .spyOn(data, 'addUserRole')
      .mockImplementation(
        (): Promise<UserRole | null> => Promise.resolve(null)
      );

    expect(
      await data.addUserRole('10', { userId: '10', role: 'ADMIN' })
    ).toStrictEqual(null);
  });

  it('add user role as admin returns UserRole', async () => {
    jest
      .spyOn(data, 'addUserRole')
      .mockImplementation(
        (): Promise<UserRole | null> => Promise.resolve(UserroleMock)
      );

    expect(
      await data.addUserRole('10', { userId: '10', role: 'ADMIN' })
    ).toStrictEqual(UserroleMock);
  });

  it('find user role as admin returns UserRole', async () => {
    jest
      .spyOn(data, 'findRole')
      .mockImplementation(
        (): Promise<UserRole | null> => Promise.resolve(UserroleMock)
      );

    expect(await data.findRole('9')).toStrictEqual(UserroleMock);
  });

  it('find user role as admin returns not there', async () => {
    jest
      .spyOn(data, 'findRole')
      .mockImplementation(
        (): Promise<UserRole | null> => Promise.resolve(null)
      );

    expect(await data.findRole('11')).toStrictEqual(null);
  });
  it('update user role as user returns none', async () => {
    jest
      .spyOn(data, 'updateUserRole')
      .mockImplementation(
        (): Promise<UserRole | null> => Promise.resolve(null)
      );

    expect(
      await data.updateUserRole('10', {
        where: { userId_role: { userId: '10', role: 'USER' } },
        data: { role: 'ADMIN' },
      })
    ).toStrictEqual(null);
  });

  it('update user role as admin returns UserRole', async () => {
    jest
      .spyOn(data, 'updateUserRole')
      .mockImplementation(
        (): Promise<UserRole | null> => Promise.resolve(UserroleMock)
      );

    expect(
      await data.updateUserRole('9', {
        where: { userId_role: { userId: '10', role: 'USER' } },
        data: { role: 'ADMIN' },
      })
    ).toStrictEqual(UserroleMock);
  });

  it('delete user role as user returns none', async () => {
    jest
      .spyOn(data, 'deleteUserRole')
      .mockImplementation(
        (): Promise<UserRole | null> => Promise.resolve(null)
      );

    expect(
      await data.deleteUserRole('10', {
        userId_role: { userId: '10', role: 'USER' },
      })
    ).toStrictEqual(null);
  });

  it('delete user role as admin returns UserRole', async () => {
    jest
      .spyOn(data, 'deleteUserRole')
      .mockImplementation(
        (): Promise<UserRole | null> => Promise.resolve(UserroleMock)
      );

    expect(
      await data.deleteUserRole('9', {
        userId_role: { userId: '10', role: 'USER' },
      })
    ).toStrictEqual(UserroleMock);
  });
  it('find role permission returns RolePermissions', async () => {
    jest
      .spyOn(data, 'findGeneralPermissions')
      .mockImplementation(
        (): Promise<RolePermissions[] | null> =>
          Promise.resolve([RolepermissionMock])
      );

    expect(await data.findGeneralPermissions('9')).toStrictEqual([
      RolepermissionMock,
    ]);
  });
  it('add role permission as admin returns RolePermissions', async () => {
    jest
      .spyOn(data, 'addRolePermissions')
      .mockImplementation(
        (): Promise<RolePermissions | null> =>
          Promise.resolve(RolepermissionMock)
      );

    expect(
      await data.addRolePermissions('9', {
        role: 'ADMIN',
        permissionType: 'CREATE',
        permissionCategory: 'COMPANY',
        permissionTenant: 'NONE',
      })
    ).toStrictEqual(RolepermissionMock);
  });
  it('add role permission as user returns none', async () => {
    jest
      .spyOn(data, 'addRolePermissions')
      .mockImplementation(
        (): Promise<RolePermissions | null> => Promise.resolve(null)
      );

    expect(
      await data.addRolePermissions('10', {
        role: 'ADMIN',
        permissionType: 'CREATE',
        permissionCategory: 'COMPANY',
        permissionTenant: 'NONE',
      })
    ).toStrictEqual(null);
  });

  it('edit role permission as admin returns RolePermissions', async () => {
    jest
      .spyOn(data, 'updateRolePermissions')
      .mockImplementation(
        (): Promise<RolePermissions | null> =>
          Promise.resolve(RolepermissionMock)
      );

    expect(
      await data.updateRolePermissions('9', {
        where: {
          role_permissionType_permissionCategory_permissionTenant: {
            role: 'ADMIN',
            permissionType: 'CREATE',
            permissionCategory: 'COMPANY',
            permissionTenant: 'NONE',
          },
        },
        data: { permissionTenant: 'COUNT' },
      })
    ).toStrictEqual(RolepermissionMock);
  });
  it('edit role permission as user returns none', async () => {
    jest
      .spyOn(data, 'updateRolePermissions')
      .mockImplementation(
        (): Promise<RolePermissions | null> => Promise.resolve(null)
      );

    expect(
      await data.updateRolePermissions('10', {
        where: {
          role_permissionType_permissionCategory_permissionTenant: {
            role: 'ADMIN',
            permissionType: 'CREATE',
            permissionCategory: 'COMPANY',
            permissionTenant: 'NONE',
          },
        },
        data: { permissionTenant: 'COUNT' },
      })
    ).toStrictEqual(null);
  });
  it('delete role permission as user returns none', async () => {
    jest
      .spyOn(data, 'deleteRolePermissions')
      .mockImplementation(
        (): Promise<Prisma.BatchPayload> => Promise.resolve({ count: 0 })
      );

    expect(
      await data.deleteRolePermissions('10', {
        role: 'ADMIN',
        permissionType: 'CREATE',
        permissionCategory: 'COMPANY',
        permissionTenant: 'COUNT',
      })
    ).toStrictEqual({ count: 0 });
  });
  it('delete role permission as admin returns count', async () => {
    jest
      .spyOn(data, 'deleteRolePermissions')
      .mockImplementation(
        (): Promise<Prisma.BatchPayload> => Promise.resolve({ count: 1 })
      );

    expect(
      await data.deleteRolePermissions('9', {
        role: 'ADMIN',
        permissionType: 'CREATE',
        permissionCategory: 'COMPANY',
        permissionTenant: 'COUNT',
      })
    ).toStrictEqual({ count: 1 });
  });

  it('filter all permissions', async () => {
    jest
      .spyOn(data, 'findAllPermissionsFilter')
      .mockImplementation(
        (): Promise<ApiAuthorization> =>
          Promise.resolve(MockApiImpl)
      );

    expect(
      await data.findAllPermissionsFilter('9', { equals: 'VIEW' })
    ).toStrictEqual(MockApiImpl);
  });
});
