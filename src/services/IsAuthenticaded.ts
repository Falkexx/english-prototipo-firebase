import { cookies } from 'next/headers'; // Para acessar os cookies no servidor
import { redirect } from '@/i18n/routing';

async function IsAuthenticated(context?: any) {
  // Obtém todos os cookies da requisição no servidor
  const cookieStore = cookies();

  // Busca o cookie específico 'nextauth.token'
  const token = cookieStore.get('nextauth.token'); // Busca o token do cookie

  // Loga o valor do token para debug (opcional)
  // Retorna true se o token existir, caso contrário false
  if(token?.value == "" || token?.value == undefined){
    redirect ('/Login')
  }else{
    return true;
  }

  
}

export default IsAuthenticated;
