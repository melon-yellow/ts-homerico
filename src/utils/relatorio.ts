/*
##########################################################################################################################
#                                                     INSTANCE CLASSES                                                   #
##########################################################################################################################
*/

// Imports
import axios from 'axios'
import { is } from 'ts-misc/dist/utils/guards.js'

// Modules
import Acesso from './acesso.js'
import * as funcoes from './funcoes.js'

/*
##########################################################################################################################
#                                                     INSTANCE CLASSES                                                   #
##########################################################################################################################
*/

// Classe Relatorio
export default class Relatorio {
  acesso: Acesso

  constructor (acesso: Acesso) {
    this.acesso = acesso
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  async relatorioLista(p: {
    dataInicial: string,
    dataFinal: string,
    idProcesso: string
  }) {
    // Get Parameters
    const { dataInicial, dataFinal, idProcesso } = p
    // Check Authentication
    if (!is.string(this.acesso.autenticacao)) return 'sem autenticacao'
    if (!this.acesso.menus('d1')) return 'sem acesso ao menu'
    // URL
    const url = `http://${this.acesso.endereco}/reports/relatoriolistas?${this.acesso.connection}`
    // Resquest JSON
    const json = {
      reportselect: 'relatoriolistas',
      datainicial: dataInicial,
      datafinal: dataFinal,
      idprocesso: idProcesso
    }
    // JSON to Hex
    const hex = funcoes.toHex(
      JSON.stringify(json)
    )
    // Request Server
    const res = await axios.post(url, hex)
    // Return Response
    return res.data
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  async relatorioGerencialRegistro(p: {
    data: string,
    registro: string
  }) {
    // Get Parameters
    const { data, registro } = p
    // Check Authentication
    if (!is.string(this.acesso.autenticacao)) return 'sem autenticacao'
    if (!this.acesso.menus('d3')) return 'sem acesso ao menu'
    // URL
    const connection = `autenticacao=${this.acesso.autenticacao}&numencypt=[numencypt]`
    const url = `http://${this.acesso.endereco}/reports/relatoriogerencial?${connection}`
    // Resquest JSON
    const json = {
      data: data,
      registro: registro
    }
    // JSON to Hex
    const hex = funcoes.toHex(
      JSON.stringify(json)
    )
    // Request Server
    const res = await axios.post(url, hex)
    // Return Response
    return res.data
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  async relatorioGerencialReport(p: {
    data: string,
    idReport: string
  }) {
    // Get Parameters
    const { data, idReport } = p
    // Check Authentication
    if (!is.string(this.acesso.autenticacao)) return 'sem autenticacao'
    if (!this.acesso.menus('d3')) return 'sem acesso ao menu'
    // URL
    const url = `http://${this.acesso.endereco}/reports/relatoriogerencial?${this.acesso.connection}`
    // Resquest JSON
    const json = {
      data: data,
      idreport: idReport
    }
    // JSON to Hex
    const hex = funcoes.toHex(
      JSON.stringify(json)
    )
    // Request Server
    const res = await axios.post(url, hex)
    // Return Response
    return res.data
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  async relatorioBoletim(p: {
    dataInicial: string,
    dataFinal: string,
    idReport: string
  }) {
    // Get Parameters
    const { dataInicial, dataFinal, idReport } = p
    // Check Authentication
    if (!is.string(this.acesso.autenticacao)) return 'sem autenticacao'
    if (!this.acesso.menus('d1')) return 'sem acesso ao menu'
    // URL
    const url = `http://${this.acesso.endereco}/reports/relatorioboletim?${this.acesso.connection}`
    // Resquest JSON
    const json = {
      reportselect: 'relatorioboletim',
      datainicial: dataInicial,
      datafinal: dataFinal,
      idreport: idReport
    }
    // JSON to Hex
    const hex = funcoes.toHex(
      JSON.stringify(json)
    )
    // Request Server
    const res = await axios.post(url, hex)
    // Return Response
    return res.data
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  async producaoLista(p: {
    dataFinal: string,
    controle: string
  }) {
    // Get Parameters
    const { dataFinal, controle } = p
    // Check Authentication
    if (!is.string(this.acesso.autenticacao)) return 'sem autenticacao'
    if (!this.acesso.menus('pro09')) return 'sem acesso ao menu'
    // URL
    const url = `http://${this.acesso.endereco}/reports/producaolistas?${this.acesso.connection}`
    // Resquest JSON
    const json = {
      data: dataFinal,
      controle: controle
    }
    // JSON to Hex
    const hex = funcoes.toHex(
      JSON.stringify(json)
    )
    // Request Server
    const res = await axios.post(url, hex)
    // Return Response
    return res.data
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  async relatorioOv(p: {
    data: string,
    idProcessoGrupo: string
  }) {
    // Get Parameters
    const { data, idProcessoGrupo } = p
    // Check Authentication
    if (!is.string(this.acesso.autenticacao)) return 'sem autenticacao'
    if (!this.acesso.menus('pro4')) return 'sem acesso ao menu'
    // URL
    const url = `http://${this.acesso.endereco}/reports/ov?${this.acesso.connection}`
    // Resquest JSON
    const json = {
      data: data,
      idprocessogrupo: idProcessoGrupo
    }
    // JSON to Hex
    const hex = funcoes.toHex(
      JSON.stringify(json)
    )
    // Request Server
    const res = await axios.post(url, hex)
    // Return Response
    return res.data
  }

  /*
  ##########################################################################################################################
  #                                                     INSTANCE CLASSES                                                   #
  ##########################################################################################################################
  */

  async relatorioInterrupcoes(p: {
    data: string,
    idProcesso: string
  }) {
    // Get Parameters
    const { data, idProcesso } = p
    // Check Authentication
    if (!is.string(this.acesso.autenticacao)) return 'sem autenticacao'
    if (!this.acesso.menus('pro2')) return 'sem acesso ao menu'
    // URL
    const url = `http://${this.acesso.endereco}/reports/interrupcoes?${this.acesso.connection}`
    // Resquest JSON
    const json = {
      data: data,
      idprocesso: idProcesso
    }
    // JSON to Hex
    const hex = funcoes.toHex(
      JSON.stringify(json)
    )
    // Request Server
    const res = await axios.post(url, hex)
    // Return Response
    return res.data
  }
}

/*
##########################################################################################################################
#                                                     INSTANCE CLASSES                                                   #
##########################################################################################################################
*/
