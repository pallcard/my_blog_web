<template>
  <div id="app">
    <Layout>
      <Header>
        <header-div/>
      </Header>
      <Layout>
        <Content>
          <Row type="flex" justify="start" class="code-row-bg">
            <Col span="6">
              <sider-div/>
            </Col>
            <Col span="16">
              <router-view/>
            </Col>
          </Row>

        </Content>
      </Layout>
      <Footer><footer-div/></Footer>
    </Layout>
  </div>
</template>

<script>
import HeaderDiv from './components/Header'
import FooterDiv from './components/Footer'
import SiderDiv from './components/Sider'
export default {
  name: 'App',
  components: { HeaderDiv, FooterDiv, SiderDiv}
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
