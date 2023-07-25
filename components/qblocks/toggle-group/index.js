// components/qblocks/togglebutton-group/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    selectedItemId: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    toggle: 1,
    children: []
  },
  relations: {
    '../toggle/index': {
      type: 'child', // 子组件的关联类型，即是子组件
      linked(target) {
        // 子组件关联时触发
        console.log('Linked to child component', target);
      },
      unlinked(target) {
        // 子组件取消关联时触发
        console.log('Unlinked from child component', target);
      }
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onChange(event) {
      console.log('onChange');
      const name = event.detail.name;
      console.log(event);
      this.data.radios.forEach((item) => {
        item.checked = item.name === name;
      });
      this.setData({
        radios: this.data.radios
      });
      this.triggerEvent('change', {
        value: name
      });
    },
    updateRadios() {
      const children = this.getRelationNodes('../toggle/index');
      console.log(children);
      const value = this.data.value;
      const radios = [];
      children.forEach((child) => {
        const checked = child.data.name === value;
        radios.push({
          name: child.data.name,
          label: child.data.label,
          checked
        });
      });
      this.setData({
        children
      });
      console.log(this.data);
    }
  },
  lifetimes: {
    ready() {
      this.updateRadios();
    }
  }
})