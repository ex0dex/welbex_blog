import { Sequelize } from 'sequelize-typescript';
import { DEVELOPMENT, SEQUELIZE } from 'src/constants';
import { Post } from 'src/posts/entities/post.entity';
import { User } from 'src/users/entities/user.entity';
import { databaseConfig } from './database.config';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
            switch (process.env.NODE_ENV) {
                case DEVELOPMENT:
                    config = databaseConfig.development;
                    break;
                // case TEST:
                //     config = databaseConfig.test;
                //     break;
                // case PRODUCTION:
                //     config = databaseConfig.production;
                //     break;
                default:
                    config = databaseConfig.development;
            }
            const sequelize = new Sequelize(config);
            // sequelize.sync({force:false})
      sequelize.addModels([User, Post]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
