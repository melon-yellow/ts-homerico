/*
##########################################################################################################################
#                                                     INSTANCE CLASSES                                                   #
##########################################################################################################################
*/

// Imports
import axios from 'axios'
import * as string from 'ts-misc/dist/utils/string.js'
import { is } from 'ts-misc/dist/utils/guards.js'

// Modules
import * as funcoes from './funcoes.js'

/*
##########################################################################################################################
#                                                     INSTANCE CLASSES                                                   #
##########################################################################################################################
*/

// Classe Acesso
export default class Acesso {
  // Expire Date
  datavencimento = new Date(2022, 6, 1)

  // Config Object
  configuracao = {
    ip: null as string,
    porta: null as string,
    autenticacao: null as string,
    menus: null as string
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  get endereco() {
    return (
      this.configuracao.ip + ':' +
      this.configuracao.porta
    )
  }

  get enderecoHelper() {
    return this.configuracao.ip + ':8000'
  }

  get autenticacao() {
    return this.configuracao.autenticacao
  }

  get today() {
    const d = new Date()
    return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
  }

  get connection() {
    return (
      'autenticacao=' +
      this.autenticacao +
      '&numencypt=' +
      this.today
    )
  }

  menus(key: string) {
    const haystack = this.configuracao.menus.split(',')
    return key in haystack
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  // Get Enterprise Connection
  async validar(key: string) {
    // Check Input
    if (!is.string(key)) {
      return {
        msg: 'Validação incorreta',
        status: '0'
      }
    }
    try {
      // Request Homerico API
      const res = await axios.get(
        `http://homerico.com.br/linkautenticacao.asp?empresa=${key}`
      )
      // Check Response
      if (!is.in(res.data, 'porta', 'string')) throw new Error('key "porta" not valid')
      if (!is.in(res.data, 'ip', 'string')) throw new Error('key "ip" not valid')
      // Set Parameters
      this.configuracao.porta = res.data.porta
      this.configuracao.ip = res.data.ip
      // Return Done
      return {
        msg: 'Validação concluída',
        status: '1'
      }
    // On Error
    } catch (error) {
      return {
        msg: 'Licença expirada',
        status: '0'
      }
    }
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  // Login to Homerico API
  async login(p: { usuario: string, senha: string }) {
    // Get Inputs
    const { usuario, senha } = p
    // Get URL
    const url = `http://${this.endereco}/login.asp?`
    // Request XML
    const html = string.join(
      [
        '<root>',
        `<data>${this.today}</data>`,
        `<user>${usuario}</user>`,
        `<password>${senha}</password>`,
        `<app>${'homericoDesktop'}</app>`,
        '</root>'
      ] as const,
      ''
    )
    // JSON to Hex
    const hex = funcoes.toHex(html)
    try {
      // Request Server
      const res = await axios.post(url, hex)
      // Check Response
      if (res.data.status === '1') {
        // Check Response
        if (!is.in(res.data, 'autenticacao', 'string')) throw new Error('key "autenticacao" not valid')
        if (!is.in(res.data, 'menu', 'string')) throw new Error('key "menu" not valid')
        // Set Parameters
        this.configuracao.autenticacao = res.data.autenticacao
        this.configuracao.menus = res.data.menu
        // Return Done
        return {
          msg: 'Conectado com sucesso',
          status: '1'
        }
      } else {
        // Return Status Not Ok
        return {
          msg: 'Erro ao conectar',
          status: '0'
        }
      }
    } catch (error) {
      return {
        msg: `${error}`,
        status: '0'
      }
    }
  }
}

/*
##########################################################################################################################
#                                                     INSTANCE CLASSES                                                   #
##########################################################################################################################
*/
