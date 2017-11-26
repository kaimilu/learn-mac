<template>
  <div class="dashboard">
    <el-row>
      <el-col :span="24">

      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      sliderValue: 100,
      data: [],
      defaultProps: {
        children: 'children',
        label: 'title'
      },
      list: []
    }
  },
  methods: {

  },
  mounted() {
    
  }
}
</script>
