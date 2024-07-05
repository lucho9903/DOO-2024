package co.edu.uco.deviucopay.business.usecase.impl.afiliado;

import java.util.List;

import co.edu.uco.deviucopay.business.assembler.entity.impl.AfiliadoAssemblerEntity;
import co.edu.uco.deviucopay.business.domain.AfiliadoDomain;
import co.edu.uco.deviucopay.business.usecase.UseCaseWithReturn;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.MessageCatalogStrategy;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.data.CodigoMensaje;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;

public class ConsultarAfiliados implements UseCaseWithReturn<AfiliadoDomain, List<AfiliadoDomain>>{
	
	private DAOFactory factory;
	
	public ConsultarAfiliados(final DAOFactory factory){
        if(ObjectHelper.getObjectHelper().isNull(factory)){
            var mensajeUsuario = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00032);
            var mensajeTecnico =  MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00031);
            throw new BusinessDeviUcopayException(mensajeTecnico, mensajeUsuario);
        }
        this.factory = factory;
    }
	@Override
	public List<AfiliadoDomain> execute( final AfiliadoDomain data) {
		var AfiliadoEntityFilter =  AfiliadoAssemblerEntity.getInstance().toEntity(data);
		var resultadosEntity = factory.getAfiliadoDAO().consultar(AfiliadoEntityFilter);
			
		
		return AfiliadoAssemblerEntity.getInstance().toDomainCollection(resultadosEntity);
	}


}
