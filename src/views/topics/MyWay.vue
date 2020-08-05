<template>
  <v-card raised>
    <v-card-title class="headline"><b>Meu Caminho Exportador</b></v-card-title>
    <v-row justify="space-between" class="pa-4 pt-0 pb-6">
      <v-col cols="5">
        <v-treeview dense
                    :items="items"
                    :active.sync="active"
                    :open.sync="open"
                    activatable
                    open-on-click
                    transition>
          <template v-slot:prepend="{ item }">
            <v-icon v-if="item.type === 'file'" :color="item.disabled?'gray':'red'">mdi-file-pdf</v-icon>
            <v-icon v-else-if="item.type === 'link'" :color="item.disabled?'gray':'blue'">mdi-open-in-new</v-icon>
            <v-simple-checkbox color="success" v-model="item.check" v-else></v-simple-checkbox>
          </template>
        </v-treeview>
      </v-col>
      <v-divider vertical></v-divider>
      <v-col class="d-flex text-center" style="justify-content: center">
        <div
          v-if="!selected"
          class="title grey--text text--lighten-1 font-weight-light"
          style="align-self: center">
          Selecione para ver detalhes
        </div>
        <div v-else>
          <div v-html="selected.content" class="text-justify"></div>
          <v-btn @click="advance" color="primary" block>Continuar</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-card>
</template>

<script lang="ts">
  import Vue from 'vue'

  let id = 0;

  export default Vue.extend({
    name: 'MyWay',
    data: () => ({
      dialog: false,
      active: [12],
      open: [11],
      items: [
        {
          id: id++,
          name: 'Conhecendo a plataforma',
          type: 'topic',
          check: true,
          children: [
            {
              id: id++,
              name: 'Acessando a aba de notícias',
              type: 'topic',
              check: true,
              content: '<p>Morbi bibendum leo a neque eleifend ultrices. Integer laoreet quam est, vitae commodo velit lobortis vitae. Duis leo nulla, ultrices nec dui sed, molestie porttitor justo. Proin malesuada velit erat, mattis molestie ipsum ornare a. Praesent porta rhoncus risus, eget congue dui venenatis eget. Pellentesque ut mauris gravida lectus viverra faucibus. Fusce sit amet malesuada turpis, vel suscipit eros. Praesent aliquam consectetur eros vitae varius. Suspendisse potenti. Aenean eleifend lacinia massa. Sed molestie non turpis posuere blandit. </p>' +
                '<p>Suspendisse potenti. Nam a libero eget felis malesuada lacinia. Vivamus ullamcorper est quis libero egestas, nec cursus erat blandit. Sed mi mauris, pharetra sed neque et, molestie scelerisque enim. Fusce scelerisque ornare tincidunt. Etiam placerat leo sit amet vehicula fermentum. In ultrices volutpat finibus. Duis a nulla nisl. </p>' +
                '<p>Pellentesque eget diam id quam dignissim condimentum sed eget orci. Donec aliquam augue vehicula est venenatis porta. Aenean dictum arcu nec arcu malesuada, ut pretium odio congue. Curabitur sapien dui, aliquet sit amet enim sed, vulputate euismod mi. Morbi porttitor mauris tortor, a vulputate quam ultrices eget. Pellentesque sed justo ut quam hendrerit molestie vitae et nulla. Phasellus sit amet ligula ex. </p>'
            }, {
              id: id++,
              name: 'Acessando a aba de eventos',
              type: 'topic',
              check: true,
              content: '<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat eros eu tincidunt viverra. Sed vulputate convallis ipsum vitae semper. Proin luctus vehicula leo, vitae consequat eros commodo id. Praesent sit amet ipsum urna. Aenean aliquet, nunc eu accumsan hendrerit, augue turpis iaculis erat, non interdum arcu arcu ac eros. Nullam sit amet suscipit quam. Quisque molestie tristique ex a scelerisque. Nunc sit amet nisi erat. Vestibulum nec nisl nisi. Morbi scelerisque sapien dictum placerat pharetra. Aliquam interdum sem vitae mi consequat tempus. Aliquam rhoncus tempor eros, sed ultricies felis maximus nec. Aenean laoreet commodo faucibus. Duis dui magna, laoreet congue laoreet id, porttitor eget ante. </p>' +
                '<p>Nunc nec tempus dolor. Vestibulum auctor lacus non lectus blandit accumsan. Donec at urna sed arcu faucibus faucibus malesuada non lorem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse pulvinar tincidunt leo, vel posuere metus vulputate sed. Praesent blandit, dolor et vulputate vestibulum, risus libero porttitor quam, ac lacinia nunc mi sed neque. Vivamus pretium a augue at finibus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent consectetur quam ac nisl mattis lacinia. Morbi sit amet justo sed justo finibus pharetra. Sed tempus nibh sed mi porta molestie. Fusce pretium nibh magna, a rhoncus mauris condimentum ut. Integer accumsan varius ante. Quisque iaculis, neque eget posuere feugiat, arcu orci accumsan ipsum, rutrum rhoncus massa magna non ipsum. Aenean quis mi mattis, ornare odio in, pellentesque nulla.</p>'
            }, {
              id: id++,
              name: 'Acessando a aba análise de negócios',
              type: 'topic',
              check: true,
              content: '<p>Nullam ornare quis quam condimentum gravida. Sed ac augue ac diam dapibus vehicula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id fringilla sem. Ut non mi libero. Morbi vel lorem est. Nam pulvinar, nibh non sollicitudin gravida, sem odio blandit libero, vel placerat elit enim sed orci. Aliquam rutrum risus eget magna elementum ullamcorper. </p>' +
                '<p>Fusce ac dignissim ante, imperdiet egestas turpis. Duis at faucibus tellus. Donec tortor dolor, suscipit non finibus sed, tempus eu leo. Praesent iaculis ultricies metus, vitae commodo mi luctus id. Pellentesque tempor, mauris eu finibus finibus, odio est dapibus urna, ut tempus dui tortor mattis nisl. Aliquam erat volutpat. Etiam congue convallis egestas. Praesent in tincidunt ante. Nam elementum ante vitae ipsum molestie suscipit. Pellentesque consectetur nibh nec purus feugiat, at varius mi imperdiet. Vivamus non facilisis sem. </p>' +
                '<p>Praesent tincidunt enim neque, dictum elementum odio suscipit in. Phasellus commodo placerat augue, eget bibendum diam lacinia tempor. Fusce convallis elit ac aliquam semper. Sed laoreet tincidunt urna. Cras lectus quam, sagittis molestie leo at, lacinia sagittis sapien. Nulla eget efficitur lacus. Phasellus ornare metus eget ligula mattis, sed elementum orci malesuada. </p>'
            }, {
              id: id++,
              name: 'Acessando a aba de consórcios de exportação',
              type: 'topic',
              check: true,
              content: '<p>Nesta aba você encontrará uma das ferramentas mais importantes da nossa plataforma, os consórcios de exportação ou de transporte. Antes de apresentar como se cadastrar em um consórcio e como utilizá-la da melhor maneira, vamos explicar rapidamente a nossa ideia de consórcio (relacionado com a nossa aplicação), como são divididos.</p>' +
                '<h3>O que é um consórcio?</h3>' +
                '<p>É um sistema de match de empresas que buscam um mesmo objetivo e se unem para diminuir custos, compartilhar informações e cooperarem em operações seja na área de transportes ou para realizar uma exportação.</p>' +
                '<h3>Como são divididos?</h3>' +
                '<p>Atualmente, nós temos dois tipos de consórcios: de transporte ou de exportação. No consórcio de transporte, empresas se juntam para compartilhar custos de fretes para serem levados à destinos finais ou intermediários como portos ou aeroportos, através dos meios de transporte disponíveis (rodoviário, ferroviário, aéreo).</p>' +
                '<p>No consórcio de exportador, empresas se juntam para atingir um volume de exportação demandada por um exportador ou para dividir custos com relação aos pagamentos realizados em uma primeira exportação.</p>' +
                '<h3>Como participar de um consórcio?</h3>' +
                '<p>Na primeira seção, o usuário deve possuir um endereço cadastrado para que um programa de pesquisa de consórcios da região ou estado sejam apresentados para ele. Após a escolha do tipo de consórcio, uma lista de consórcios é fornecida apresentando o nome do consórcio, uma breve descrição do grupo, a localização média com as empresas, quantidade de membros e status do grupo. Nesta parte, o usuário tem a opção de solicitar a participação em algum consórcio ou criar um caso nenhum seja vantajoso.</p>' +
                '<p>Ao ser membro de um consórcio, o usuário tem acesso a todos os membros do grupo e suas informações (contato dos responsáveis, endereço) e várias ferramentas para que os membros do consórcio possam se organizar entre eles, tais como notificações de ações e ofertas a serem compartilhadas/discutidas</p>'
            }, {
              id: id++,
              name: 'Cadastro no portal SISCOMEX',
              type: 'topic',
              check: true
            }, {
              id: id++,
              name: 'Providenciando o Radar do seu empreendimento',
              type: 'topic',
              check: true
            }
          ]
        }, {
          id: id++,
          name: 'Dados da sua empresa',
          type: 'topic',
          check: true,
          children: [
            {
              id: id++,
              name: 'Adicionar suas categorias de produtos',
              type: 'topic',
              check: true,
              content: '<p>Para que possamos apresentar uma experiência compartilhada para nossos usuários, é preciso informar todos os produtos que você tem interesse em exportar ou gostaria de saber mais. \tTodos os produtos apresentam um código NCM (Nomenclatura Comum ao Mercosul) e através deste código, forneceremos notícias, eventos e facilitaremos seu percurso na realização da primeira exportação.</p>' +
                '<p>Para cadastrar os produtos, basta você ir na aba “Meu Negócio” e, no cartão “meus produtos” você terá o botão “adicionar novo produto”. Após, você digitará o produto que deseja e verificar em qual produto ele se encaixa na nossa lista. Ainda tem dúvidas? Entre em contato conosco através do chat ou pelo email relacionamento@pebra.com.br</p>'
            }, {
              id: id++,
              name: 'Cadastrar um responsável',
              type: 'topic',
              check: true,
              content: '<h3>Por que é necessário adicionar um responsável?</h3>' +
                '<p>Porque nós precisamos ter a certeza de que todos os nossos usuários estejam buscando na plataforma uma maneira para começar a exportar ou aumentar suas exportações. Então, precisamos verificar todos os usuários de forma que tenhamos certeza de que todas as transações ou ofertas sejam realizadas por pessoas que estão com o mesmo objetivo: de realizar uma exportação.</p>' +
                '<h3>O que eu ganho se eu tiver um responsável?</h3>' +
                '<p>Com um responsável cadastrado, você pode aceitar ofertas na área de análises, receber informações relevantes em tempo real e participar de consórcios de exportações.</p>' +
                '<h3>Certo, e como eu faço para colocar um responsável?</h3>' +
                '<p>É algo simples, na aba “Meu negócio” você terá um cartão sobre “Meus responsáveis”, clicando no botão “adicionar responsável”, é necessário apresentar as seguintes informações:</p>' +
                '<ul><li>Nome completo</li>' +
                '<li>CPF</li>' +
                '<li>Documento com foto</li>' +
                '<li>Telefone</li>' +
                '<li>Vínculo do responsável com a empresa</li></ul>' +
                '<p>Após essas informações, nós iremos averiguar as informações nas próximas 48 horas e cadastrar a empresa como “empresa verificada“ para que você possa ter acesso às ferramentas antes bloqueadas.\n</p>'
            }, {
              id: id++,
              name: 'Registrar a localização da empresa',
              type: 'topic',
              check: true,
              contact: '<h3>Por que é necessário informar o endereço?</h3>' +
                '<p>Informando o endereço nos ajuda a oferecer eventos da sua região, apresentar notícias relevantes não somente em nível nacional, mas também de acordo com o seu estado, região e cidade. Além disso, você poderá encontrar consórcios de exportações perto de você que podem ser de grande ajuda na hora de realizar a sua primeira exportação.</p>' +
                '<h3>Como adicionar o endereço?</h3>' +
                '<p>Acessando a aba “Meu negócio” você terá um cartão sobre “Meu endereço”, clicando no botão “atualizar endereço”, você colocará seu endereço no local indicado e, depois, você clicará no botão “alterar”.</p>'
            }, {
              id: id++,
              name: 'Indicar o tipo e tamanho da empresa',
              type: 'topic',
              check: true,
              content: '<h3>Por que é necessário informar o tamanho da empresa?</h3>' +
                '<p>No pagamentos de impostos dos produtos, o governo cobra tarifas diferentes de acordo com o tamanho da empresas. Nesse quesito, podemos fornecer documentos com cálculos já realizados para a sua situação sem precisar procurar informações e fazer cálculos.</p>' +
                '<h3>Como adicionar o tamanho?</h3>' +
                '<p>Acessando a aba “Meu negócio” você terá um cartão sobre “Tamanho da empresa”, clicando no botão “atualizar tamanho”, você marcará o tipo de empresa na qual você se encaixa.</p>'
            }
          ]
        }, {
          id: id++,
          name: 'Informações',
          type: 'topic',
          check: false,
          children: [
            {
              id: id++,
              name: 'Capacitação em comércio exterior',
              type: 'topic',
              check: false,
              content: '<p>O processo de exportação pode gerar inúmeras dúvidas ao longo do caminho para uma empresa iniciante. Desafios, formulários, leis, cálculos de preços, entre outros. Sendo assim, a Agência Brasileira de Promoção de Exportações e Investimentos (Apex-Brasil) desenvolveu um programa de capacitação em comércio exterior.</p>' +
                '<p>O Programa é implementado em todas regiões do país, por meio de parcerias da Apex-Brasil com instituições de ensino (Universidades, Parques Tecnológicos ou Fundações de Amparo à Pesquisa) ou Federações de Indústria. Chamadas de entidades executoras do programa, elas são responsáveis pela aplicação da metodologia do PEIEX na qualificação de empresas.</p>' +
                '<p>Para solicitar, você poderá justamente se cadastrar pelo link do formulário abaixo e o mais interessante é que a empresa não precisa pagar pelo atendimento, mas deve estar disposta a dedicar tempo e investir na melhoria do seu processo. Ao final do atendimento, que dura aproximadamente 38 horas, a empresa recebe um plano de exportação para orientar a sua inserção internacional. </p>' +
                '<p>Veja no vídeo abaixo tudo sobre como o programa PEIEX funciona e como o processo de cadastro é realizado.</p>' +
                '<img src="' + require('@/assets/topics/thumbnail.jpg') + '" style="width:100%"></img>'
            }, {
              id: id++,
              name: 'Como analisar uma oportunidade?',
              type: 'file',
              check: false,
              content: '<p>Etiam volutpat laoreet mollis. Proin imperdiet condimentum accumsan. Sed nec dolor suscipit, dictum felis vitae, auctor est. Duis malesuada felis vitae magna rhoncus gravida. Duis et nisl eget mi tempor blandit. Phasellus lobortis finibus dolor vel volutpat. Ut varius congue augue vel iaculis. Pellentesque interdum, elit quis efficitur tempor, enim dui bibendum tortor, convallis gravida mauris urna et velit. Curabitur lobortis velit sed nisi finibus, eget fringilla lacus aliquam. Sed ut hendrerit augue. Sed malesuada facilisis ex, at pellentesque erat blandit sed. </p>' +
                '<img src="' + require('@/assets/topics/thumbnail2.jpg') + '" style="width:100%"></img>' +
                '<button class="v-btn v-btn--block v-btn--contained theme--dark v-size--default v-btn--contained red mb-2">' +
                '<span class="v-btn__content">Baixar conteúdo</span></button>'
            }, {
              id: id++,
              name: 'Como verificar quais são meus concorrentes?',
              type: 'topic',
              check: false,
              content: '<p>Olá pessoal, neste tópico vamos discutir um pouco sobre como realizar uma pesquisa de mercado de acordo com os produtos que você está interessado. O portal de exportação do governo disponibiliza todos as empresas que exportam para outros países através do portal SISCOMEX. Nele, você tem informações referentes a cada ano com muitos dados que podem ser úteis.</p>' +
                '<p>Num primeiro momento, nós vos convidamos para acessar o portal através do link: <a href="http://www.mdic.gov.br/index.php/comercio-exterior/estatisticas-de-comercio-exterior/empresas-brasileiras-exportadoras-e-importadoras">http://www.mdic.gov.br/index.php/comercio-exterior/estatisticas-de-comercio-exterior/empresas-brasileiras-exportadoras-e-importadoras</a> ou procurando em um motor de busca (Google, Yahoo) com o texto “banco de dados siscomex”.</p>' +
                '<img src="' + require('@/assets/topics/concorrentes01.png') + '" style="width:100%"></img>' +
                '<p>Na parte “Cadastro de empresas exportadoras/importadoras 20XX” estão dispostos arquivos que podem ser abertos como uma planilha em que você encontrará o nomes das empresas que exportam de acordo com o ano solicitado.</p>' +
                '<img src="' + require('@/assets/topics/concorrentes02.png') + '" style="width:100%"></img>' +
                '<p>Sendo assim, você pode realizar uma análise de mercado, verificar seus possíveis concorrentes e, após, verificar se eles já exportam os mesmo produtos que você de modo a pensar em como funciona a cadeia de produção até a exportação e como pode-se melhorar e oferecer algo diferenciado do concorrente.</p>'
            }, {
              id: id++,
              name: 'Aprendendo a verificar as leis internacionais',
              type: 'topic',
              check: false,
              content: '<p>Além de você conhecer as leis brasileiras, é necessário conhecer as leis estrangeiras! Seja na maneira de fazer o produto, seja na hora de embalar, com quais materiais por exemplo. Por isso, você deve se perguntar: O produto que já faço no Brasil, serve para fora? \n' +
                'Por exemplo, para exportar produtos alimentícios, é necessário que haja o conteúdo nutricional na embalagem. Além disso, é necessário dizer se tem Glutem, Lactose ou outros agentes que podem fazer mal.\n' +
                'Mas primeiro se pergunte: Quem é meu público alvo? Para então começar a procurar sobre as leis daquele país.</p>'
            }, {
              id: id++,
              name: 'Calculando os preços do mercado interno e externo',
              type: 'topic',
              check: false
            }, {
              id: id++,
              name: 'Encontrando um consórcio de exportação',
              type: 'topic',
              check: false
            }, {
              id: id++,
              name: 'Outros tutoriais que a gente pode encaixar...',
              type: 'topic',
              check: false
            }
          ]
        }
      ]
    }),
    methods: {
      advance () {
        this.selected.check = true
        this.active = [this.active[0] + 1]
      }
    },
    computed: {
      selected () {
        if (!this.active.length) return undefined
        const id = this.active[0]
        for (let i = 0; i < this.items.length; i++) {
          const item = this.items[i]
          if (item.id === id) {
            return item
          } else {
            for (let j = 0; j < item.children.length; j++) {
              const subItem = item.children[j]
              if (subItem.id === id) {
                return subItem
              }
            }
          }
        }
        return undefined
      }
    }
  })
</script>
