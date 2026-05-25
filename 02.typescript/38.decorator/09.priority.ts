// 模拟当前用户角色
var currentUser = { role: "admin" };

// 权限装饰器
function requireRole(role: string) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        var originalMethod = descriptor.value;

        descriptor.value = function (...args: any[]) {
            if (currentUser.role !== role) {
                console.log("权限不足，无法执行 " + propertyKey);
                return null;
            }
            return originalMethod.apply(this, args);
        };
    };
}

class AdminService {
    @requireRole("admin")
    deleteUser(id: number): string {
        return "删除用户 " + id + " 成功";
    }

    @requireRole("admin")
    viewUser(id: number): string {
        return "查看用户 " + id;
    }
}

var admin = new AdminService();
console.log(admin.viewUser(1));
console.log(admin.deleteUser(1));

// 模拟普通用户
currentUser = { role: "user" };
console.log(admin.deleteUser(2));