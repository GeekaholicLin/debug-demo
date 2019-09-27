function readonly(target, key, descriptor) {
  descriptor.writable = false
  return descriptor
}

class MyClass {
  @readonly
  value = this.getNum() + 1;

  getNum() {
    return 1;
  }
}

var mc = new MyClass()
console.log(mc.value)