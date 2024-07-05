package co.edu.uco.deviucopay.business.usecase.impl.tipoIdentificacione;

import java.util.List;

import co.edu.uco.deviucopay.business.assembler.entity.impl.TipoIdentificacionAssemblerEntity;
import co.edu.uco.deviucopay.business.domain.TipoIdentificacionDomain;
import co.edu.uco.deviucopay.business.usecase.UseCaseWithReturn;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.MessageCatalogStrategy;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.data.CodigoMensaje;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;

public class ConsultarTipoIdentificaciones implements UseCaseWithReturn<TipoIdentificacionDomain, List<TipoIdentificacionDomain>>{
	
	private DAOFactory factory;
	
	 public ConsultarTipoIdentificaciones(final DAOFactory factory) {
	        if (ObjectHelper.getObjectHelper().isNull(factory)) {
	            var mensajeUsuario = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00025);
	            var mensajeTecnico = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00026);
	            throw new BusinessDeviUcopayException(mensajeUsuario, mensajeTecnico);
	        }

	        this.factory = factory;
	    }
	 
	@Override
    public List<TipoIdentificacionDomain> execute(TipoIdentificacionDomain data) {
        var tipoIdentificacionEntityFilter = TipoIdentificacionAssemblerEntity.getInstance().toEntity(data);
        var resultadoEntity = factory.getTipoIdentificacionDAO().consultar(tipoIdentificacionEntityFilter);
        return TipoIdentificacionAssemblerEntity.getInstance().toDomainCollection(resultadoEntity);
    }

}
