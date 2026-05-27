// 链表节点类型
interface ListNode<T> {
    value: T;              // 当前节点的值
    next?: ListNode<T>;    // 下一个节点，递归引用
}

// 创建链表
const linkedList: ListNode<number> = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: undefined
            }
        }
    }
};

// 遍历链表
function traverseList<T>(node: ListNode<T>): void {
    let current: ListNode<T> | undefined = node;
    const values: T[] = [];

    while (current) {
        values.push(current.value);
        current = current.next;
    }

    console.log("链表值: " + values.join(" -> "));
}

traverseList(linkedList);

// 计算链表长度
function getLength<T>(node: ListNode<T>): number {
    let length = 0;
    let current: ListNode<T> | undefined = node;

    while (current) {
        length++;
        current = current.next;
    }

    return length;
}

console.log("链表长度: " + getLength(linkedList));