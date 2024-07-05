package co.edu.uco.deviucopay.business.usecase.impl.carnet;

import java.util.List;

import co.edu.uco.deviucopay.business.assembler.entity.impl.CarnetAssemblerEntity;
import co.edu.uco.deviucopay.business.domain.CarnetDomain;
import co.edu.uco.deviucopay.business.usecase.UseCaseWithReturn;
import co.edu.uco.deviucopay.crosscutting.exceptions.customs.BusinessDeviUcopayException;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.MessageCatalogStrategy;
import co.edu.uco.deviucopay.crosscutting.exceptions.messageCatalog.data.CodigoMensaje;
import co.edu.uco.deviucopay.crosscutting.helpers.ObjectHelper;
import co.edu.uco.deviucopay.data.dao.factory.DAOFactory;

public class ConsultarCarnets implements UseCaseWithReturn<CarnetDomain, List<CarnetDomain>>{
	
	private DAOFactory factory;
	
	public ConsultarCarnets(final DAOFactory factory){
        if(ObjectHelper.getObjectHelper().isNull(factory)){
            var mensajeUsuario = MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00032);
            var mensajeTecnico =  MessageCatalogStrategy.getContenidoMensaje(CodigoMensaje.M00031);
            throw new BusinessDeviUcopayException(mensajeTecnico, mensajeUsuario);
        }
        this.factory = factory;
    }
	@Override
	public List<CarnetDomain> execute( final CarnetDomain data) {
		var carnetEntityFilter =  CarnetAssemblerEntity.getInstance().toEntity(data);
		var resultadosEntity = factory.getCarnetDAO().consultar(carnetEntityFilter);
			
		
		return CarnetAssemblerEntity.getInstance().toDomainCollection(resultadosEntity);
	}


}
