//新增数据函数
function addRow() {
    var table = document.getElementById('table');
    // console.log(table);
    //获取插入的位置

    var length = table.rows.length;
    // console.log(length);
    //插入行节点
    var newRow = table.insertRow(length);
    // console.log(newROW);
    //插入列节点对象
    var nameCol = newRow.insertCell(0);
    var phoneCol = newRow.insertCell(1);
    var actionCol = newRow.insertCell(2);
    //修改节点文本内容
    //修改节点文本内容
    nameCol.innerHTML = '未命名';
    phoneCol.innerHTML = "无联系方式";
    actionCol.innerHTML = '<button>编辑</button><button>删除</button>'
}

// 编辑数据函数
function editRow(button) {
    console.log(button);
}

// 删除数据函数
function deleteRow(button) {
    console.log(button);
}