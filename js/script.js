'use strict';
(function () {
    let listData = [1, [1, 2,[1.1, 1.2, 1.3], 3], 4, 5, [6, 7, 8]];
    const recursiveList = data => {
        const ul = document.createElement('ul');
        for (const item of data) {
            const li = document.createElement('li')
            Array.isArray(item) ? li.append(recursiveList(item)): li.innerHTML = item;
            ul.append(li);
        }
        return ul;
    }
    const ul = recursiveList(listData);
    document.body.append(ul);
})()


