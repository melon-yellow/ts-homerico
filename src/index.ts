/*
##########################################################################################################################
#                                                      TS-HOMERICO                                                       #
##########################################################################################################################
#                                                                                                                        #
#                                             Homerico Conexão (Decompilado)                                             #
#                                                    Author: Anthony                                                     #
#                                       ---------------- NodeJS ----------------                                         #
#                                                 * Under Development *                                                  #
#                                    https://github.com/anthony-freitas/ts-homerico                                      #
#                                                 Powered by homerico                                                    #
#                                                                                                                        #
##########################################################################################################################
#                                                     CONEXAO CORE                                                       #
##########################################################################################################################
*/

// Imports
import Acesso from './utils/acesso.js'
import Relatorio from './utils/relatorio.js'

/*
##########################################################################################################################
#                                                     CONEXAO CLASS                                                      #
##########################################################################################################################
*/

// Classe Homerico Conexao
export default class HomericoConexao {
  acesso: Acesso
  relatorio: Relatorio

  constructor () {
    this.acesso = new Acesso()
    this.relatorio = new Relatorio(this.acesso)
  }

  /*
  ##########################################################################################################################
  #                                                       ACESSO                                                           #
  ##########################################################################################################################
  */

  get validar(): Acesso['validar'] {
    return this.acesso.validar.bind(this.acesso)
  }

  get login(): Acesso['login'] {
    return this.acesso.login.bind(this.acesso)
  }

  /*
  ##########################################################################################################################
  #                                                     RELATORIO                                                          #
  ##########################################################################################################################
  */

  get relatorioLista(): Relatorio['relatorioLista'] {
    return this.relatorio.relatorioLista.bind(this.relatorio)
  }

  get relatorioGerencialRegistro(): Relatorio['relatorioGerencialRegistro'] {
    return this.relatorio.relatorioGerencialRegistro.bind(this.relatorio)
  }

  get relatorioGerencialReport(): Relatorio['relatorioGerencialReport'] {
    return this.relatorio.relatorioGerencialReport.bind(this.relatorio)
  }

  get relatorioBoletim(): Relatorio['relatorioBoletim'] {
    return this.relatorio.relatorioBoletim.bind(this.relatorio)
  }

  get producaoLista(): Relatorio['producaoLista'] {
    return this.relatorio.producaoLista.bind(this.relatorio)
  }

  get relatorioOv(): Relatorio['relatorioOv'] {
    return this.relatorio.relatorioOv.bind(this.relatorio)
  }

  get relatorioInterrupcoes(): Relatorio['relatorioInterrupcoes'] {
    return this.relatorio.relatorioInterrupcoes.bind(this.relatorio)
  }
}

/*
##########################################################################################################################
#                                                         END                                                            #
##########################################################################################################################
*/
