/**
 * Carmine Maggio <carminemaggiom@gmail.com>
 * Golding Design (1.0)
 * Bootstrap y otras librerías tomadas para construir algo Nuevo!
 */

//
// Estandarizar jQuery después de hacer bundle
//
import $ from 'jquery'
window.$ = window.jQuery = $


//
// Scripts Bootstrap
//
import './js/bootstrap'

//
// Stylesheets Bootstrap
//
import './scss/main.scss'

//
// Scripts Waves Effects
//
import Waves from './js/waves'
// Initialization to Waves Effects
Waves.init()
// Clases únicos botones únicos con efecto waves
Waves.attach('.btn-primary, .btn-secondary')
Waves.attach('.btn-outline-primary, .btn-outline-secondary', ['waves-light'])
