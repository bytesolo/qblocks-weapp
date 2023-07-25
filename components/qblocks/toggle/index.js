// components/qblocks/togglebutton/index.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    icon: String,
    label: String,
    selected: {
      type: Boolean,
      value: false
    }
  },
  relations: {
    '../toggle-group/index': {
      type: 'parent', // 关联的目标节点应为父节点
      linked: function (target) {
        // 每次被插入到custom-ul时执行，target是custom-ul节点实例对象，触发在attached生命周期之后
      },
      linkChanged: function (target) {
        // 每次被移动后执行，target是custom-ul节点实例对象，触发在moved生命周期之后
      },
      unlinked: function (target) {
        // 每次被移除时执行，target是custom-ul节点实例对象，触发在detached生命周期之后
      }
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    selectedClass: ""
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap() {
      let newStatus = !this.properties.selected;
      this.setData({
        selected: newStatus,
        selectedClass: newStatus ? "qb-toggle__selected" : ""
      });

      this.triggerEvent('change', {
        selected: newStatus
      }, {});
    }
  }
})