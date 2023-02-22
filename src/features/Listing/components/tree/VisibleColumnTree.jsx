import { useState, useEffect } from "react";
import { Tree } from "..";

const VisibleColumnTree = ({ columnData = [], setColumnData = [] }) => {
  const [selectedColumn, setSelectedColumn] = useState([]);
  useEffect(() => {
    setSelectedColumn(
      columnData.filter((item) => !item.hidden).map((item) => item.key)
    );
  }, [columnData]);
  const onDrop = (info) => {
    const dropKey = info.node.key;
    const dragKey = info.dragNode.key;
    const dropPos = info.node.pos.split("-");
    const dropPosition =
      info.dropPosition - Number(dropPos[dropPos.length - 1]);
    const loop = (data, key, callback) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].key === key) {
          return callback(data[i], i, data);
        }
      }
    };

    const data = [...columnData]; // Find dragObject

    let dragObj;
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1);
      dragObj = item;
    });

    let ar = [];
    let i;
    loop(data, dropKey, (_item, index, arr) => {
      ar = arr;
      i = index;
    });

    if (dropPosition === -1) {
      ar.splice(i, 0, dragObj);
    } else {
      ar.splice(i + 1, 0, dragObj);
    }

    setColumnData(data);
  };

  return (
    <Tree
      className="draggable-tree"
      draggable
      onDrop={onDrop}
      treeData={columnData}
      checkable
      checkedKeys={selectedColumn}
      onCheck={(checkedKeys, { node }) => {
        setColumnData(
          columnData.map((item) => {
            if (item.key === node.key) return { ...item, hidden: !item.hidden };

            return item;
          })
        );
        setSelectedColumn(checkedKeys);
        console.log(node.key);
      }}
    />
  );
};

export default VisibleColumnTree;
