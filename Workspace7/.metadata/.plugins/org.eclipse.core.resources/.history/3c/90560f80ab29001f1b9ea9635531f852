package co.edu.uco.deviucopay.business.usecase.impl.tipoCuenta;

import java.util.List;
import co.edu.uco.deviucopay.business.assembler.entity.impl.TipoCuentaAssemblerEntity;
import co.edu.uco.deviucopay.business.domain.TipoCuentaDomain;
import co.edu.uco.deviucopay.business.usecase.UseCaseWithReturn;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.MessageCatalogStrategy;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.data.CodigoMensaje;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;

public class ConsultarTipoCuentas implements UseCaseWithReturn<TipoCuentaDomain, List<TipoCuentaDomain>>{
	
	private DAOFactory factory;
	
	 public ConsultarTipoCuentas(final DAOFactory factory) {
	        if (ObjectHelper.getObjectHelper().isNull(factory)) {
	            var mensajeUsuario = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00025);
	            var mensajeTecnico = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00026);
	            throw new BusinessDeviUcopayException(mensajeUsuario, mensajeTecnico);
	        }

	        this.factory = factory;
	    }
	 
	@Override
    public List<TipoCuentaDomain> execute(TipoCuentaDomain data) {
        var tipoCuentaEntityFilter = TipoCuentaAssemblerEntity.getInstance().toEntity(data);
        var resultadoEntity = factory.getTipoCuentaDAO().consultar(tipoCuentaEntityFilter);
        return TipoCuentaAssemblerEntity.getInstance().toDomainCollection(resultadoEntity);
    }

}
